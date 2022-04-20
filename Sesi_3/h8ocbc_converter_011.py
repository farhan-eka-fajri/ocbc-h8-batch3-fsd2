# variabel inputKelvin menampung input string dari pengguna yang di expect (kelvin) dan convert menjadi integer
inputKelvin = int(input("Masukan angka yang akan diconvert dalam kelvin : "))
# deklarasi global variable Celcius untuk menghitung celcius
Celcius = inputKelvin - 273.15
# membuat fungsi konversi dari kelvin ke celcius dengan parameter inputan 
def kelvinCelcius(inputKelvin):
    ''' Membuat fungsi untuk mengubah ke celcius ataupun kelvin 
    dengan parameter inputan dari user dalam format kelvin
    '''
    print('')
    print(kelvinCelcius.__doc__)
    if True:
        print("Konversi ke Celsius = ", Celcius, "C")
    else:
        print("Suhu Kelvin adalah = ", inputKelvin, "K")
# memanggil fungsi dengan parameter Celcius 
kelvinCelcius(Celcius)
# mendeklarasi global variable fahrenheit untuk menghitung konversi dari celcius ke fahrenheit
Fahrenheit = Celcius * (9/5) + 32 
def celciusFahrenheit(Celcius):
    ''' Membuat fungsi untuk mengubah ke Fahrenheit dari kelvin 
     ataupun celcius
    '''
    print('')
    print(celciusFahrenheit.__doc__)
    if True:
        print("Konversi Celcius ke Fahrenheit = ", Fahrenheit, "F")
    else:
        f = (inputKelvin - 273.15) * (9/5) + 32
        print("Konversi Kelvin ke Fahrenheit = ", f, "F" )
# memanggil fungsi konversi celcius ke fahrenheit
celciusFahrenheit(Celcius)
# mendefinisikan fungsi untuk konversi dari fahrenheit
def fromFahrenheit(Celcius):
    ''' Membuat fungsi untuk mengubah ke Fahrenheit dari kelvin 
     ataupun celcius
    '''
    print('')
    print(fromFahrenheit.__doc__)
# menghitung variabel celcius dan kelvin dalam fungsi
    Celcius = (Fahrenheit-32) * (5/9) 
    Kelvin  = Celcius + 273.15
    print("Konversi dari Fahrenheit ke Celcius adalah = ", Celcius, "C")
    print("Konversi dari Fahrenheit ke Kelvin adalah = ", Kelvin, "K")
# memanggil fungsi konversi dari fahrenheit ke celcius dan kelvin
fromFahrenheit(Celcius)