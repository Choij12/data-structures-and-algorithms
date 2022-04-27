class LinkedList:

    def __init__(self):
        self.head = None
        self.list = []

    def __str__(self):
        string = ""
        current = self.head
        while current:
            string += f"{{ {current.value} }} -> "
            current = current.next
        string += 'NULL'
        return string

    def insert(self, data=None):
        self.head = Node(data, self.head)

    def append(self, data):
        new_node = Node(data)
        current = self.head

        if not self.head:
            self.head = new_node
            return

        while current.next:
            current = current.next

        current.next = new_node

    def insert_before(self, query, value):
        if self.head is None:
            raise TargetError
        elif self.head.value == query:
            self.insert(value)
            return
        current = self.head
        while current:
            try:
                if current.next.value == query:
                    old_next = current.next
                    current.next = Node(value, old_next)
                    break
                current = current.next
            except:
                raise TargetError


    def insert_after(self, query, value):
        if self.head is None:
            raise TargetError
        current = self.head
        while current:
            if current.value is query:
                current.next = Node(value, current.next)
                break
            if current.next is None:
                raise TargetError
            current = current.next

    def kth_from_end(self, index):
        idx = []
        current = self.head
        while current:
            idx.append(current.value)
            current = current.next
        idx.reverse()
        if index >= len(idx):
            raise TargetError
        if index < 0:
            raise TargetError
        return idx[index]

    def includes(self, query):
        current = self.head
        while current:
            if current.value is query:
                return True
            current = current.next
        return False

class Node:
    def __init__(self, data=None, next_=None):
        self.value = data
        self.next = next_


class TargetError(Exception):
    pass
