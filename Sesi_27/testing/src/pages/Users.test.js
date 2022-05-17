import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Users from './Users';

test(
    // param 1 = deskripsi dari testing
    'should render and fetch users data', 
    // parameter 2 = function untuk 
    async () => {
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>

        )

        // EXPECT 1 = kita cari dan cek tombol pada halaman users
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Back to Home')

        // EXPECT 2 = pastikan fetchnya sudah berjalan dengan baik
        const user = await waitFor(
            // kita eksekusi functionnya setelah timeout
            () => {
                // params 1 = cek nama
                return screen.findByText('Leanne Graham')
            }, 
            // params 2 = option
            // 2000 = 2 detik
            { timeout: 2000}
        )
        expect(user).toBeInTheDocument()
    });