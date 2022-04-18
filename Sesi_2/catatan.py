#Introduction If Statement

x = 0
y = 5

if x < y:                            # Truthy
    print('yes')

if y < x:                            # Falsy
    print('yes')

if x:                                # Falsy
    print('yes')

if y:                                # Truthy
    print('yes')

if 'aul' in 'grault':                # Truthy
    print('yes')

if 'quux' in ['foo', 'bar', 'baz']:  # Falsy
    print('yes')


if 'foo' in ['bar', 'baz', 'qux']:
    print('Expression was true')
    print('Executing statement in suite')
    print('...')
    print('Done.')
    
print('After conditional')


#Grouping Statement indentation and blocks
# Does line execute?                        Yes    No
#                                           ---    --
if 'foo' in ['foo', 'bar', 'baz']:        #  x
    print('Outer condition is true')      #  x

    if 10 > 20:                           #  x
        print('Inner condition 1')        #        x

    print('Between inner conditions')     #  x

    if 10 < 20:                           #  x
        print('Inner condition 2')        #  x

    print('End of outer condition')       #  x
print('After outer condition')            #  x

#else and elif clauses
x = 20

if x < 50:
    print('(first suite)')
    print('x is small')
else:
    print('(second suite)')
    print('x is large')

hargaBuku = 20000
hargaMajalah = 5000
uang = 2000

if uang > hargaBuku:
    print("beli buku")
elif uang > hargaMajalah:
    print("beli majalah")
else:
    print("uang tidak cukup")

name = 'Hacktiv8'
if name == 'Fred':
    print('Hello Fred')
elif name == 'Xander':
    print('Hello Xander')
elif name == 'Hacktiv8':
    print('Hello Hacktiv8')
elif name == 'Arnold':
    print('Hello Arnold')
else:
    print("I don't know who you are!")


if 'a' in 'bar':
    print('foo')
elif 1/0:
    print("This won't happen")
elif var:
    print("This won't either")


#One-line if statement

if 'f' in 'foo': print('1'); print('2'); print('3')

if 'z' in 'foo': print('1'); print('2'); print('3')

x = 3
if x == 1: print('foo'); print('bar'); print('baz')
elif x == 2: print('qux'); print('quux')
else: print('corge'); print('grault')

x = 3
if x == 1:
    print('foo')
    print('bar')
    print('baz')
elif x == 2:
    print('qux')
    print('quux')
else:
    print('corge')
    print('grault')


#Conditional Expression (python ternary operator)
raining = False
print("Let's go to the", 'beach' if not raining else 'library')

if True:
    pass
print('foo')

#python while loop

i = 1
while i < 6:
  print(i)
  i += 1

#break and continue statement

# The Python break statement immediately terminates a loop entirely. Program execution proceeds tothe first statement following the loop body.
# The Python continue statement immediately terminates the current loop iteration. Execution jumpsto the top of the loop, and the controlling expression is re-evaluated 
# to determine whether the loopwill execute again or terminate.


n = 5
while n > 0:
    n -= 1
    if n == 2:
        break # Break Statement
    print(n)
print('Loop ended.')

n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue # Continue Statement
    print(n)
print('Loop ended.')

n = 5
while n > 0:
    n -= 1
    print(n)
    if n == 2:
        break
else:
    print('Loop done.')

#Nested While Loop
a = ['foo', 'bar']

while len(a):
    print(a.pop(0))
    
    b = ['baz', 'qux']
    
    while len(b):
        print('>', b.pop(0))


#one-line while loops 
n = 5
while n > 0: n -= 1; print(n)

#Python for loops
#iterating in lists
a = ['foo', 'bar', 'baz']
for i in a:
    print(i)
#iterating in dictionary
d = {'foo': 1, 'bar': 2, 'baz': 3}
for k in d:
    print(k)

for k in d:
    print(d[k])

for k in d.values():
    print(k)

for k, v in d.items(): 
    print(k, ":", v) 

#Range() function
for i in ['foo', 'bar', 'baz', 'qux']:
    if 'b' in i:
        break #break statement
    print(i)

for i in ['foo', 'bar', 'baz', 'qux']:
    if 'b' in i:
        continue #continue statement
    print(i)

#else clause
for i in ['foo', 'bar', 'baz', 'qux']:
    print(i)
else:
    print('Done.')  # Will execute

#The else clause won’t be executed if the list is broken out of with a break statement:
for i in ['foo', 'bar', 'baz', 'qux']:
  if i == 'bar':
    break
  print(i)
else:
  print('Done.') 
