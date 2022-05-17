import {render,screen,fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import App from './App'

// Test 1 pastikan render berhasil
test('should render App successfully', () => {
  render(
    <MemoryRouter>

      <App />

    </MemoryRouter>
  
    )

    // Expect 1 kita ambil title lalu tes keberadaannya
    const title = screen.getByText(/ini adalah header/i)
    expect(title).toBeInTheDocument()

    // Expect 2 kita cari button di dalam halaman Home
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('List Users')

    // navigate pindah dari halaman home ke halaman users
    fireEvent.click(button)

    //Sudah berada di halaman users

    // Expect 3 kita cari dan cek button pada halaman users
    const homeButton = screen.getByRole('button')
    expect(homeButton).toBeInTheDocument()
    expect(homeButton).toHaveTextContent('Back to Home')

})