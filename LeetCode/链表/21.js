function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function (list1, list2) {
    //创建头结点
    let head = new ListNode()
    //head留着备用
    let cur = head

    let count = 0
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            console.log(count++,list1,list2,'list1更小');
            cur.next = list1
            list1 = list1.next
        } else {
            console.log(count++,list1,list2,'list2更小');
            cur.next = list2
            list2 = list2.next
        }
        //后面接了一个节点,往后跳转
        cur = cur.next
    }
    cur.next = list1 == null ? list2 : list1
    return head.next
};
let list1 ={
    val : 1,
    next :{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
}
let list2 ={
    val : 1,
    next :{
        val:3,
        next:{
            val:4,
            next:null
        }
    }
}

let res = mergeTwoLists(list1,list2)
console.log(res);