let nums =[0,1,2,2,3,0,4,2]
removeElement = function(nums, val) {
    let len=nums.length
    //特殊情况数组为空
    if(len==0) return 0
    //普通情况
    //双指针
    let left=0
    let right=1
    let nlen=1
    let count=0
    while(right>len)
    {
        while(right<len&&nums[right]==val){
            right++
        }
        while(nums[left]!=val){
        left++
        }
    
        if(right<len){
            console.log(进入交换)
        nums[left]=nums[right]
        nums[right]=val
        console.log("nlen值为"+nlen)
        nlen++
        }
        
    }
    return nlen
    };
    console.log("数组长度为")
    console.log(removeElement(nums,2))
    console.log(nums)