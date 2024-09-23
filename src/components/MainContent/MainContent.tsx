import { useState, type SyntheticEvent } from "react";
import { Box } from "@mui/material";
import { fetchDestinationById, Destination } from "../../fake-api";
import { LocationCard } from "../LocationCard";
import { getNearbyDestinations } from "../../utils";
import { SearchBar } from "../SearchBar";

export function MainContent() {
    const [selectedDestination, setSelectedDestination] =
        useState<Destination | null>(null);
    const [nearbyLocations, setNearbyLocations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(false);

    const updateSelectedDestination = async (destination: Destination) => {
        setLoading(true);
        try {
            const destinationDetails = await fetchDestinationById(destination.id);
            if (destinationDetails) {
                setSelectedDestination(destinationDetails);
                const nearby = getNearbyDestinations(destinationDetails);
                setNearbyLocations(nearby);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = async (_event: SyntheticEvent,
        newValue: Destination | null) => {
        if (newValue) {
            await updateSelectedDestination(newValue);
        }
    };

    const handleNearLocation = async (location: Destination) => {
        const syntheticEvent = {} as SyntheticEvent;
        await handleSelect(syntheticEvent, location);
    };

    const handleClearSearch = () => {
        setSelectedDestination(null);
        setNearbyLocations([]);
    };

    return (
        <Box>
            <SearchBar
                value={selectedDestination}
                onSelectDestination={handleSelect}
                onClear={handleClearSearch}
                loading={loading}
            />
            {selectedDestination && (
                <LocationCard
                    selectedDestination={selectedDestination}
                    handleNearLocation={handleNearLocation}
                    nearbyLocations={nearbyLocations}
                />
            )}
        </Box>
    );
}
