/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //定义两个指针
    let cur1 = list1
    let cur2 = list2
    const head = new ListNode(0)
    let res = head
    let count =1
    while (cur1 != null || cur2!=null) {
        console.log('循环次数'+(count++));
        if( cur1 != null && cur2 != null){
            if(cur1.val===cur2.val||cur1.val<cur2.val){
                res.next =cur1
                cur1=cur1.next
            }else if(cur1.val>cur2.val){
                res.next = cur2
                cur2 = cur2.next
            }
            res = res.next
        }
        if(cur1===null&&cur2!=null){
            res.next = cur2
           break
        }
        if(cur1!=null&&cur2===null){
            res.next = cur1
            break
        }
    }
    return head.next
};
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

const list1=new ListNode(0,new ListNode(1,new ListNode(3)))
const list2=new ListNode(0,new ListNode(3,new ListNode(9)))
console.log(1);
console.log(mergeTwoLists(list1,list2));