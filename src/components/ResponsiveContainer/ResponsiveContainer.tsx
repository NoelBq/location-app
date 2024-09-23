import { Container } from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function ResponsiveContainer({ children }: Props): ReactElement {
    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingLeft: { xs: undefined, lg: 0 },
                paddingRight: { xs: undefined, lg: 0 },
            }}
        >
            {children}
        </Container>
    );
}
