# -*- coding: utf-8 -*-
"""Python_OOP.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ml_zd_Ni9agrbXcP4uJXXS57mUqG9uve

# Object-Oriented Programming (OOP) in Python

Object-oriented programming (OOP) is a method of structuring a program by bundling related properties and behaviors into individual objects. In this tutorial, you’ll learn the basics of object-oriented programming in Python.

Conceptually, objects are like the components of a system. Think of a program as a factory assembly line of sorts. At each step of the assembly line a system component processes some material, ultimately transforming raw material into a finished product.

An object contains data, like the raw or preprocessed materials at each step on an assembly line, and behavior, like the action each assembly line component performs.

## How to Define a Class

All class definitions start with the class keyword, which is followed by the name of the class and a colon. Any code that is indented below the class definition is considered part of the class’s body.

Here’s an example of a Dog class:
"""

class Dog:
    pass

"""The body of the Dog class consists of a single statement: the pass keyword. pass is often used as a placeholder indicating where code will eventually go. It allows you to run this code without Python throwing an error.

The Dog class isn’t very interesting right now, so let’s spruce it up a bit by defining some properties that all Dog objects should have. There are a number of properties that we can choose from, including name, age, coat color, and breed. To keep things simple, we’ll just use name and age.

The properties that all Dog objects must have are defined in a method called .__init__(). Every time a new Dog object is created, .__init__() sets the initial state of the object by assigning the values of the object’s properties. That is, .__init__() initializes each new instance of the class.

You can give .__init__() any number of parameters, but the first parameter will always be a variable called self. When a new class instance is created, the instance is automatically passed to the self parameter in .__init__() so that new attributes can be defined on the object.

Let’s update the Dog class with an .__init__() method that creates .name and .age attributes:

"""

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

"""Notice that the .__init__() method’s signature is indented four spaces. The body of the method is indented by eight spaces. This indentation is vitally important. It tells Python that the .__init__() method belongs to the Dog class.

In the body of .__init__(), there are two statements using the self variable:

1. self.name = name creates an attribute called name and assigns to it the value of the name parameter.
2. self.age = age creates an attribute called age and assigns to it the value of the age parameter.

Attributes created in .__init__() are called instance attributes. An instance attribute’s value is specific to a particular instance of the class. All Dog objects have a name and an age, but the values for the name and age attributes will vary depending on the Dog instance.

On the other hand, class attributes are attributes that have the same value for all class instances. You can define a class attribute by assigning a value to a variable name outside of .__init__().

For example, the following Dog class has a class attribute called species with the value "Canis familiaris":
"""

class Dog:
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

"""## Instantiate an Object in Python

To instantiate objects of this Dog class, you need to provide values for the name and age. If you don’t, then Python raises a TypeError:
"""

# Dog()

"""To pass arguments to the name and age parameters, put values into the parentheses after the class name:"""

buddy = Dog("Buddy", 9)

miles = Dog("Miles", 4)

"""This creates two new Dog instances—one for a nine-year-old dog named Buddy and one for a four-year-old dog named Miles.

The Dog class’s .__init__() method has three parameters, so why are only two arguments passed to it in the example?

When you instantiate a Dog object, Python creates a new instance and passes it to the first parameter of .__init__(). This essentially removes the self parameter, so you only need to worry about the name and age parameters.

After you create the Dog instances, you can access their instance attributes using dot notation:
"""

buddy.name

buddy.age

buddy.species

"""## Instance Methods

Instance methods are functions that are defined inside a class and can only be called from an instance of that class. Just like .__init__(), an instance method’s first parameter is always self.
"""

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

"""This Dog class has two instance methods:

1. .description() returns a string displaying the name and age of the dog.
2. .speak() has one parameter called sound and returns a string containing the dog’s name and the sound the dog makes.
"""

miles = Dog("Miles", 4)

miles.description()

miles.speak("Woof Woof")

miles.speak("Bow Wow")

"""## Inherit From Other Classes in Python

Inheritance is the process by which one class takes on the attributes and methods of another. Newly formed classes are called child classes, and the classes that child classes are derived from are called parent classes.

Child classes can override or extend the attributes and methods of parent classes. In other words, child classes inherit all of the parent’s attributes and methods but can also specify attributes and methods that are unique to themselves.

Although the analogy isn’t perfect, you can think of object inheritance sort of like genetic inheritance.

You may have inherited your hair color from your mother. It’s an attribute you were born with. Let’s say you decide to color your hair purple. Assuming your mother doesn’t have purple hair, you’ve just overridden the hair color attribute that you inherited from your mom.

You also inherit, in a sense, your language from your parents. If your parents speak English, then you’ll also speak English. Now imagine you decide to learn a second language, like German. In this case you’ve extended your attributes because you’ve added an attribute that your parents don’t have.

### Dog Park Example

Pretend for a moment that you’re at a dog park. There are many dogs of different breeds at the park, all engaging in various dog behaviors.

Suppose now that you want to model the dog park with Python classes. The Dog class that you wrote in the previous section can distinguish dogs by name and age but not by breed.

You could modify the Dog class in the editor window by adding a .breed attribute:
"""

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed

    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

miles = Dog("Miles", 4, "Jack Russell Terrier")
buddy = Dog("Buddy", 9, "Dachshund")
jack = Dog("Jack", 3, "Bulldog")
jim = Dog("Jim", 5, "Bulldog")

"""Each breed of dog has slightly different behaviors. For example, bulldogs have a low bark that sounds like woof, but dachshunds have a higher-pitched bark that sounds more like yap.

Using just the Dog class, you must supply a string for the sound argument of .speak() every time you call it on a Dog instance:
"""

buddy.speak("Yap")
jim.speak("Woof")

"""## Parent Classes vs Child Classes

Let’s create a child class for each of the three breeds mentioned above: Jack Russell Terrier, Dachshund, and Bulldog.

For reference, here’s the full definition of the Dog class:
"""

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} is {self.age} years old"

    def speak(self, sound):
        return f"{self.name} says {sound}"

"""Remember, to create a child class, you create new class with its own name and then put the name of the parent class in parentheses."""

class JackRussellTerrier(Dog):
    pass

class Dachshund(Dog):
    pass

class Bulldog(Dog):
    pass

"""With the child classes defined, you can now instantiate some dogs of specific breeds in the interactive window:"""

miles = JackRussellTerrier("Miles", 4)

buddy = Dachshund("Buddy", 9)
jack = Bulldog("Jack", 3)
jim = Bulldog("Jim", 5)

"""Instances of child classes inherit all of the attributes and methods of the parent class:"""

miles.species

buddy.name

print(jack)

jim.speak("Woof")

"""## Extend the Functionality of a Parent Class

Since different breeds of dogs have slightly different barks, you want to provide a default value for the sound argument of their respective .speak() methods. To do this, you need to override .speak() in the class definition for each breed.

To override a method defined on the parent class, you define a method with the same name on the child class. Here’s what that looks like for the JackRussellTerrier class:
"""

class JackRussellTerrier(Dog):
    def speak(self, sound="Arf"):
        return f"{self.name} says {sound}"

"""Now .speak() is defined on the JackRussellTerrier class with the default argument for sound set to "Arf"."""

miles = JackRussellTerrier("Miles", 4)
miles.speak()

miles.speak("Grrr")