should_continue = True
if should_continue:
    print("Hello")

known_people = ["John", "Anna", "Mary"]
person = input("Enter the person you know: ")

if person in known_people:
    print("You know {}!".format(person))
else:
    print("You don't know {}!".format(person))

def who_do_you_know():
    # Ask the user for a list of people they know
    # Split the string into a list
    # Return that list
    people = input("Enter people separated by commas: ")

    people_without_spaces = [person.strip() for person in people.split(",")]
    return people_without_spaces

def ask_user():
    # Ask user for a name
    # See if their name is in the list of people they know
    # Print out that they know the person
    person = input("Enter user: ")

    if person in who_do_you_know():
        print("User {} is in the list".format(person))
    else:
        print("User {} is not in the list".format(person))

ask_user()
