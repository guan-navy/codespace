const nums=[-1,2,1,-4]//-4，-1，1，2
let target=1
//预期结果应该是2
var threeSumClosest = function(nums, target) {
    //和三数之和相似
    //给数组排序
    nums.sort((a,b)=>a-b)
    const len =nums.length
    let min=Math.abs(target-nums[0]-nums[nums.length-1]-nums[1])
    let sum=0

    console.log("数组是"+nums)
    console.log("len:"+len)

    for(let i=0;i<len-2;i++){
        //得到差值现在只要去寻找，哪两个数和最接近
        //跳过相同的数
        console.log("---------------------------------------")
        console.log("第"+(i+1)+"次循环")
        console.log("选中元素为"+nums[i])
        console.log("---------------------------------------")
        if(i>0&&nums[i]==nums[i-1])continue
      let temp=target-nums[i]
      let l=i+1
      let r=len-1

      console.log("temp："+temp)
        while(l<r-1){
            
            let sum=nums[l]+nums[r]
            let sta=temp-sum
            console.log("while循环第一步")
            console.log("l:"+l+"元素值"+nums[l]+"----"+"r:"+r+"元素值"+nums[r])
            console.log("两个指针之和sum："+sum)
            console.log("target-三数之和的差sta："+sta)

            if(sta==0)return (nums[i]+nums[l]+nums[r])
            else if(sta<0){
                //判断指针指向方向有没有连续重复元素
                console.log("进入sta<0条件判断语句")
                console.log("l:"+l+"元素值"+nums[l]+"----"+"r:"+r+"元素值"+nums[r])
                while(l<r&&nums[l]==nums[l+1]){
                    l++
                    console.log("元素重复,l指针跳转至下标"+l)
                }
                 while(l<r&&nums[r]==nums[r-1]){
                    r--
                    console.log("元素重复,r指针跳转至下标"+r)
                }
               
                 r--
               
            }
            else if(sta>0){
                 //判断指针指向方向有没有连续重复元素
                 console.log("进入sta>0条件判断语句")
                 console.log("l:"+l+"元素值"+nums[l]+"----"+"r:"+r+"元素值"+nums[r])
                  while(l<r&&nums[l]==nums[l+1]){
                    l++
                    console.log("元素重复,l指针跳转至下标"+l)
                }
                  while(l<r&&nums[r]==nums[r-1]){
                    r--
                    console.log("元素重复,r指针跳转至下标"+r)
                }
                l++
                 }
                
            }
        let absN=Math.abs(nums[i]+nums[l]+nums[r]-target);
        if(min>absN){
            min=absN
            sum=nums[i]+nums[l]+nums[r]
        }

      
 
 
    }
    return sum
}

console.log("Test")
console.log(threeSumClosest(nums,target))