// render = akan menampilkan component yang kita set di parameternya
// screen = akan mensimulasikan layar di komputer/laptop kita


import { render, screen } from '@testing-library/react';
import App from './App';

// test(desc), exec = function yang disediakan oleh jest


// parameter 1 : deskripsi => menggambarkan test di sini akan melakukan apa
test('renders learn react link', 

// parameter 2 : exec => sebuah function untuk menjalankan test terhadap desc yang sudah diisi
() => {
  // 1. render App component
  render(<App />);

  // 2. kita dapatkan hasil render dengan screen yang kita panggil getByText()
  // getByText(string | regex)
  const linkElement = screen.getByText(/learn react/i);

  // 3. kita uji hasilnya
  expect(linkElement).toBeInTheDocument();
});
