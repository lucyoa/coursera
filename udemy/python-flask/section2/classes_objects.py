lottery_player_dict = {
    'name': 'Rolf',
    'numbers': (5, 9, 12, 3, 1, 21)
}

class LotteryPlayer:
    def __init__(self, name):
        self.name = name
        self.numbers = (5, 9, 12, 3, 1, 21)

    def total(self):
        return sum(self.numbers)

player_one = LotteryPlayer("Rolf")
player_two = LotteryPlayer("John")

print(player_one == player_two)

class Student:
    def __init__(self, name, school):
        self.name = name
        self.school = school
        self.marks = []

    def average(self):
        return sum(self.marks) / len(self.marks)

    @classmethod
    def go_to_school(cls):
        print("I'm going to school")

anna = Student("Anna", "MIT")
rolf = Student("Rolf", "Oxford")

anna.marks.append(56)
anna.marks.append(71)
Student.go_to_school()

class Store:
    def __init__(self, name):
        self.name = name
        self.items = []

    def add_item(self, name, price):
        self.items.append({
            'name': name,
            'price': price
        })

    def stock_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

    @classmethod
    def franchise(cls, store):
        # Return another store, with the same name as the argument's name, plus " - franchise"
        return store.name + " - franchise"

    @staticmethod
    def store_details(store):
        # Return a string representing the argument
        # It should be in the format 'NAME, total stock price: TOTAL'
        return "{}, total stock price: {}".format(store.name, store.stock_price())

store = Store("Test")
store2 = Store("Amazon")
store2.add_item("Keyboard", 160)

print(Store.franchise(store))  # returns a Store with name "Test - franchise"
print(Store.franchise(store2))  # returns a Store with name "Amazon - franchise"

print(Store.store_details(store))  # returns "Test, total stock price: 0"
print(Store.store_details(store2))  # returns "Amazon, total stock price: 160"
