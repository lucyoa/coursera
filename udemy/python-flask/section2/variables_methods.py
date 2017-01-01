a = 5
b = 10
my_variable = 56
any_variable_name = 10

string_variable = "hello"
single_quotes = 'strings can have single quotes'

#print(my_variable)
#print(string_variable)
#print("hello, world")
#print(123)

def my_print_method(my_parameter):
    print(my_parameter)

my_print_method("Hello World!")

def my_multiply_method(number_one, number_two):
    return number_one * number_two

result = my_multiply_method(5, 3)
print(result)

my_print_method(my_multiply_method(4, 3))
