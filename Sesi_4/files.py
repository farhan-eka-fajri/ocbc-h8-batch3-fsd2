#membuka file
file = open('files.txt','r',encoding='utf-8')
print(file.read())
file.close()

#membuat dan menulis file
with open("sample.txt",'w',encoding = 'utf-8') as f:
   f.write("my first file\n")
   f.write("This file\n\n")
   f.write("contains three lines\n")

f = open("sample.txt",'r',encoding = 'utf-8')
f.read(4) # read the first 4 data
f.read(4)    # read the next 4 data
f.read()     # read in the rest till end of file
f.read()  # further reading returns empty sting
f.tell()    # get the current file position
f.seek(0)   # bring file cursor to initial position
print(f.read())  # read the entire file

# Exception
# x = 10
# if x > 5:
#     raise Exception('x should not exceed 5. The value of x was: {}'.format(x))


# x = 10
# if x > 5:
#     raise Exception('your custom exception')


# The AssertionError Exception
# Instead of waiting for a program to crash midway, you can also start by making an assertion in Python. We assert that a certain condition is met. 
# If this condition turns out to be True, then that is excellent! The program can continue. If the condition turns out to be False, 
# you can have the program throw an AssertionError exception

import sys
# assert ('linux' in sys.platform), "This code runs on Linux only."
# assert ('windows' in sys.platform), "This code runs on Windows only."


def os_interaction():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."
    assert ('windows' in sys.platform), "This code runs on Windows only."
    print('Doing something.')


# try:
#     os_interaction()
# except:
#     pass

# try:
#     os_interaction()
# except:
#     print('Windows function was not executed')


try:
    os_interaction()
    with open('file.log') as file:
        read_data = file.read()
except FileNotFoundError as fnf_error:
    print(fnf_error)
except AssertionError as error:
    print(error)
    print('os_interaction() function was not executed')


#Else Clause

try:
    os_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)

#Cleaning Up After Using finally 

# Have a look at the following example:

try:
    os_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('Cleaning up, irrespective of any exceptions.')