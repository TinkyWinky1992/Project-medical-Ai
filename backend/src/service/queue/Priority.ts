class QueueItem {
    data: any;
    priority: number;

    constructor(data: any, priority: number) {
        this.data = data;
        this.priority = priority;
    }
}

// Define the PriorityQueue class
export class PriorityQueue<T> {
    items: QueueItem[] = [];

    constructor(){

    }
    show(){
        console.log(this.items)
    }
    insertList(data: any[]){
        for(let i =0; i < data.length; i++)
            this.insert(data[i], data[i].level)
    }
    
    insert(data: any, priority: number): void {
        const newItem = new QueueItem(data, priority);
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (newItem.priority > this.items[i].priority) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem);
        }
    }

    // Dequeue the highest priority item from the Priority Queue
    pop(): any {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift()?.data;
    }

    // Peek at the highest priority item without dequeuing
    peek(): any {
        if (this.isEmpty()) return "Empty Queue";
        return this.items[0].data;
    }
    size(){
        return this.items.length
    }
    // Helper method to check if the Priority Queue is empty
    isEmpty(): boolean {
        return this.items.length == 0;
    }
    getData(): QueueItem[]{
        return this.items
    }
}