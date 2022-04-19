# function definition is here
def printme(str_input):
    # this prints a passed string into this function
    print(str_input)

# now you can call printme function
printme("I'm first call to user defined function!")
printme("Again second call to the same function")


# Pass by reference vs value
# all oarameters (arguments) in the python language are passed by reference
# it means if you change what a parameter referes to within a function,
# the change also reflects ack in the calling function

# Function definition is here
def changeme( mylist ):
   '''This changes a passed list into this function'''
   mylist = mylist+[1,2,3,4]
   print("\nValues inside the function : ", mylist)
   return mylist

# Now you can call changeme function
mylist = [10,20,30]
print("\nValues outside the function - before : ", mylist)
mylist = changeme( mylist )
print("\nValues outside the function - after  : ", mylist)


# Function definition is here
def changeme( mylist ):
   '''This changes a passed list into this function'''
   mylist = [1, 2, 3, 4] # This would assign new reference in mylist
   print("Values inside the function  : ", mylist)

# Now you can call changeme function
mylist = [10, 20, 30]
changeme( mylist )
print("Values outside the function : ", mylist)

# Function definition is here
def printinfo( name, age = 26 ):
   '''This prints a passed info into this function'''
   print("Name : ", name)
   print("Age  : ", age)
   print("")

# Now you can call printinfo function
printinfo( age=50, name="hacktiv8" )
printinfo( name="hacktiv" )



#variable-length arguments
# An asterisk (*) is placed before the variable name that holds the values of all nonkeyword variable arguments. 
# All variable values in an asterisk, will be saved into a tuple. This tuple remains empty if no additional arguments are specified during the function call. 
# The code below is a simple example.
# Function definition is here
def printinfo( arg1, *vartuple ):
# def printinfo(arg1, arg2, arg3, arg4):
   '''This prints a variable passed arguments'''
   print('arg1     : ', arg1)
   print('vartuple : ', vartuple)
   print('')
   
   for var in vartuple:
      print('isi vartuple : ', var) 

# Now you can call printinfo function
printinfo( 10 )
printinfo( 70, 60, 50, "a" )

# Create a function with nonkeyword variables

def person_car(total_data, **kwargs):
  '''Create a function to print who owns what car'''
  print('Total Data : ', total_data)
  for key, value in kwargs.items():
    print('Person : ', key)
    print('Car    : ', value)
    print('')

person_car(3, jimmy='chevrolet', frank='ford', tina='honda')
person_car(3)

#Anonymous function = lambda
# These functions are called anonymous because they are not declared in the standard manner by using the def keyword. You can use the lambda keyword to create small anonymous functions.
# lambda forms can take any number of arguments but return just one value in the form of an expression. They cannot contain commands or multiple expressions.
# An anonymous function cannot be a direct call to print because lambda requires an expression
# lambda functions have their own local namespace and cannot access variables other than those in their parameter list and those in the global namespace.
# The syntax of lambda functions contains only a single statement, which is as follows −

# Function definition is here
sum = lambda arg1, arg2: arg1 + arg2

# That lambda function will be equal to :
# def sum(arg1, arg2):
#     return arg1+arg2

# Now you can call sum as a function
print("Value of total : ", sum( 10, 20 ))
print("Value of total : ", sum( 20, 20 ))

#Return statement 
# The statement return [expression] exits a function, optionally passing back an expression to the caller. A return statement with no arguments is the same as return None.
# All the above examples are not returning any value. You can return a value from a function as follows.
# Function definition is here
def sum(arg1, arg2):
    # Add both the parameters and return them."
    total = arg1 + arg2
    return total

# Now you can call sum function
total = sum(10, 20)
print("Result function : ", total)

# Global vs. Local variables

# Variables that are defined inside a function body have a local scope, and those defined outside have a global scope.

# This means that local variables can be accessed only inside the function in which they are declared, whereas global variables can be accessed throughout the program body 
# by all functions. 
# When you call a function, the variables declared inside it are brought into scope.

# Declare a global variable
total = 0

# Create sum function
def sum( arg1, arg2 ):
   total = arg1 + arg2; 
   print("Inside the function local total   : ", total)
   return total

# Call a function
print("Outside the function global total - before : ", total)
total = sum( 10, 20 )
print("Outside the function global total - after  : ", total)



# A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. Such a docstring becomes the __doc__ special attribute of that object.
# All modules should normally have docstrings, and all functions and classes exported by a module should also have docstrings.
# For consistency, always use '''triple single quotes''' or """triple double-quotes""" around docstrings.
# There is no strict rules how to write the docstring. You can write the docstring as you like. For clear explanation, Docstring usually contains 3 parts :

# Aims of a module, function, class, or method.
# Description of input parameter with their types.
# Description of output parameter (only if return something).

# Example of docstring in a function

def sum_number(num1, num2):
  '''
  This function is used to sum of 2 variables.
  :param num1: Input number 1 | int or float
  :param num2: Input number 2 | int or float
  
  :return: num3: Sum of number | int or float
  '''

  num3 = num1 + num2
  return num3

# Syntax to get explanation/docstring from a particular module/function/class

print(sum_number.__doc__)

