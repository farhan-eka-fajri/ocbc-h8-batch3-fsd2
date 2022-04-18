print('hello world')

#integer

print(123123123123123123123123123123123123123123123123 + 1)

# Python interprets a sequence of decimal digits without any prefix to be a decimal number:
print(type(123123123123123123123123123123123123123123123123 + 1))

print(4.2)
print(type(4.2))

print(4.)

print(.2)

print(.4e7)

print(4.2e-4)

#String
print("Hacktiv8")
print(type("Hacktiv8"))

#empty string 
print('')

print("This string contains a single quote (') character.")

print('This string contains a double quote (") character.')

#Boolean
print(type(True))

print(type(False))

#Variable Assignment
n = 300
print(n)
n

# Later, if you change the value of n and use it again, the new value will be substituted instead:

n = 1000
print(n)

n

#Python also allows chained assignment, which makes it possible to assign the same value to several variables simultaneously:
a = b = c = 300
print(a, b, c)

#Variable Types in Python
var = 23.5
print(var)

var = "Now I'm a string"
print(var)

#Variable Names
name = "Hacktiv8"
Age = 54
has_laptops = True
print(name, Age, has_laptops)

# 9_kepala_naga = True

#tidak case sensitive
age = 1
Age = 2
aGe = 3
AGE = 4
a_g_e = 5
_age = 6
age_ = 7
_AGE_ = 8

print(age, Age, aGe, AGE, a_g_e, _age, age_, _AGE_)

#Operator and Expression in Python
a = 10
b = 20
a + b

a = 10
b = 20
a + b - 5

# Here are some examples of these operators in use:

a = 4
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a ** b)

# The result of standard division (/) is always a float, even if the dividend is evenly divisible by the divisor:

10 / 5

#Comparison Operators
# Here are examples of the comparison operators in use:

a = 10
b = 20
print(a == b)

print(a != b)

print(a <= b)

print(a >= b)


a = 30
b = 30
print(a == b)

print(a <= b)

print(a >= b)

#String Manipulation
# + Operators
s = 'foo'
t = 'bar'
u = 'baz'

print(s + t)

print(s + t + u)


print('Hacktiv8 ' + 'Inalum')

# * Operators

s = 'foo.'

s * 4

# in Operators

s = 'foo'

print(s in 'That food for us')

print(s in 'That good for us')

# Case Conversion
s = 'HackTIV8'

# Capitalize
print(s.capitalize())

# Lower
print(s.lower())

# Swapcase
print(s.swapcase())

# Title
print(s.title())

# Uppercase
print(s.upper())


#Python Lists
a = ['foo', 'bar', 'baz', 'qux']

print(a)

a = [21.42, 'foobar', 3, 4, 'bark', False, 3.14159]

print(a)

a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']

print(a[0])
print(a[5])

print(a[-1])
print(a[-6])

#Slicing also works. If a is a list, the expression a[m:n] returns the portion of a from index m to, but not including, index n:
a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']

a[2:5]

# The concatenation (+) and replication (*) operators:

print(a)

print(a + ['grault', 'garply'])
print(a * 2)

# len(), min(), max()

print(a)

print(len(a))
print(min(a))
print(max(a))

#modify single list value
a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']

print(a)

a[2] = 10
a[-1] = 20

print(a)
# A list item can be deleted with the del command:

del a[3]

print(a)

#modify multiple list values 
a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']

print(a[1:4])

a[1:4] = [1.1, 2.2, 3.3, 4.4, 5.5]

print(a)

#Python Tuples

# Tuples are identical to lists in all respects, except for the following properties:

# Tuples are defined by enclosing the elements in parentheses (()) instead of square brackets ([]). Tuples are immutable. Here is a short example showing a tuple definition, indexing, and slicing:

t = ('foo', 'bar', 'baz', 'qux', 'quux', 'corge')

print(t)

print(t[0])

print(t[-1])

# packing and unpacking

(s1, s2, s3, s4) = ('foo', 'bar', 'baz', 'qux')

print(s1)
print(s2)
print(s3)
print(s4)

#immutable tuple
t4 = ('foo', 'bar', 'baz', 'qux')
t4 = ('aa' 'bb', 'cc')
print(t4)

person1_age = 42
person2_age = 16
person3_age = 71
print(person1_age, person2_age, person3_age)
 
# someone_is_of_working_age = (person1_age >= 18 and person1_age <= 65) or (person2_age >= 18 and person2_age <= 65) or (person3_age >= 18 and person3_age <= 65)
someone_is_of_working_age = (
    (person1_age >= 18 and person1_age <= 65)       # True
    or (person2_age >= 18 and person2_age <= 65)    # False
    or (person3_age >= 18 and person3_age <= 65)    # False
) # True or .. false or .. false
 
print(someone_is_of_working_age)




