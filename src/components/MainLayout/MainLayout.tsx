import { Stack } from '@mui/material';
import { ResponsiveContainer } from '../ResponsiveContainer';
import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function MainLayout({
    children,
}: Props) {
    return (
        <Stack sx={{ minHeight: 1 }}>
            <ResponsiveContainer>
                <Stack pb={2}>
                    {children}
                </Stack>
            </ResponsiveContainer>
        </Stack>
    );
}
