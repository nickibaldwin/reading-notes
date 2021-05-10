# Code 401

## Data Structures and Algorithms Lecture #2 Stacks and Queues

## Resources: 

## [Medium Article Stacks and Queues with code](https://medium.com/swlh/stacks-and-queues-simplified-ef0f838fc534)

## [Visualgo](https://visualgo.net/en/list)

## Stacks

![](./assets/2021-04-30-14-19-32.png)

- LIFO - last in first out

Common terminology for a stack is

- Push - Nodes or items that are put into the stack are pushed

- Pop - pop it off the top

    Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

- Top - This is the top of the stack.

- Peek - Tell me the top

  When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

- IsEmpty - returns true when stack is empty otherwise returns false.

Time: 0(n)
Space: 0(1)

Pseudocode:


![](./assets/2021-05-02-17-42-15.png)

![](./assets/2021-05-02-17-03-29.png)

## Queue:

- FIFO - first in first out (ie waiting in line)

- Enqueue - Nodes or items that are added to the queue.

- Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.

- Front - This is the front/first Node of the queue.

- Rear - This is the rear/last Node of the queue.

- Peek - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.

- IsEmpty - returns true when queue is empty otherwise returns false.

![](./assets/2021-04-30-14-14-20.png)

Pseudocode:

![](./assets/2021-05-02-18-23-14.png)


- You can implement a stack with a queue? @ 15 minutes

NEED TO KNOW (for interviews):

Hashmaps and hash tables (this is an object?) @16:15

## DEMO @ 18:25

29 minutes:
![](./assets/2021-04-30-14-34-13.png)

Push:
![](./assets/2021-04-30-14-34-30.png)

Pop:
--this.length = remove the item, instead of ++ to increment by 1

33minutes:
![](./assets/2021-04-30-14-37-37.png)

delete is removing an item from the stack, we need it to be gone

35 minutes:
![](./assets/2021-04-30-14-40-08.png)

### Peek
36 minutes-
peek is like pop, but no deleting it (remove the delete)

![](./assets/2021-04-30-14-42-22.png)

this result is not what we wanted

![](./assets/2021-04-30-14-43-25.png)

Had to edit the delete as seen below
![](./assets/2021-04-30-14-44-37.png)

This is correct:
![](./assets/2021-04-30-14-44-55.png)


## Queue (43 minutes)

enqueue - add a value to the queue

![](./assets/2021-04-30-15-04-23.png)

54:30

![](./assets/2021-04-30-15-08-58.png)

55 for visual explanation:

![](./assets/2021-04-30-15-09-43.png)

dequeue needs next

![](./assets/2021-04-30-15-15-06.png)
