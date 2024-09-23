import { useState, useEffect, type SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { fetchDestinations, Destination } from "../../fake-api";

interface SearchDestinationProps {
  onSelectDestination: (event: SyntheticEvent, newValue: Destination | null) => Promise<void>;
  onClear: () => void;
  loading: boolean;
  value?: Destination | null;
}

const QUERY_MIN_LENGTH = 3;

export function SearchBar({ onSelectDestination, onClear, value }: SearchDestinationProps) {
  const [query, setQuery] = useState<string>("");
  const debounced = useDebouncedCallback((query) => {
    if (query && query.length >= QUERY_MIN_LENGTH) {
      setIsLoading(true)
      setQuery(query);
    } else {
      setOptions([]);
      setIsLoading(false);
      setQuery("");
    };
  }, 300);
  const [options, setOptions] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOptions = async () => {
      if (query && query.length >= QUERY_MIN_LENGTH) {
        try {
          const res = await fetchDestinations(query);
          setOptions(res);
        } catch (error) {
          console.error(error)
          setOptions([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setQuery("");
        setOptions([]);
      }
    };

    fetchOptions();
  }, [query]);

  useEffect(() => {
    if (value) {
      setQuery(value.name);
    }
  }, [value]);

  const handleSelect = (
    event: SyntheticEvent,
    newValue: Destination | null
  ) => {
    if (newValue) {
      onSelectDestination(event, newValue);
      setQuery("");
      onClear();
    }
  };

  const handleInputChange = (
    _event: SyntheticEvent,
    newInputValue: string
  ) => {
    if (query !== newInputValue) {
      debounced(newInputValue);
      if (newInputValue === "") {
        onClear();
      }
    }
  };

  const getNoOptionsText = (isLoading: boolean, value?: string) => {
    if (isLoading) {
      return "Loading options...";
    }
    if (!value) {
      return "Type to search options";
    }

    return "No options";
  };

  return (
    <Stack mx={{ xs: -1, sm: -2, md: -2, lg: -3 }}>
      <Card
        sx={{
          background: "linear-gradient(47.18deg, #1C94F4 41.7%, #4FBCFF 84.35%)",
          borderRadius: { xs: 1.25, md: 2 },
          p: { xs: 2, md: 4 },
        }}
      >
        <CardContent sx={{ p: "12px !important" }}>
          <Stack alignItems="center" justifyContent="center">
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="white"
              sx={{
                opacity: 0.9, maxWidth: "80%",
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Search for a location
            </Typography>

            <Stack
              mt={1.5}
              width={{ xs: 240, md: 320 }}
              justifyContent="center"
              direction="row"
              spacing={1}
            >
              <Autocomplete
                loading={Boolean(value && isLoading)}
                fullWidth
                options={options}
                getOptionLabel={(option: Destination) => option.name}
                noOptionsText={getNoOptionsText(isLoading, query)}
                onInputChange={handleInputChange}
                onChange={handleSelect}
                value={value}
                ListboxProps={{
                  sx: {
                    '& .MuiAutocomplete-option': {
                      fontSize: { xs: '12px', md: '14px' },
                    },
                  },
                }}
                sx={{
                  "& .MuiAutocomplete-endAdornment": {
                    display: "none",
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    placeholder="Enter a location"
                    sx={{
                      '& .MuiInputBase-root': {
                        height: { xs: 30, md: 40 },
                        fontSize: { xs: '12px', md: '14px' },
                      },
                      backgroundColor: "white",
                      borderRadius: '8px',
                      '& fieldset': { border: 'none' },
                    }}
                    {...params}
                    fullWidth
                  />
                )}
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
