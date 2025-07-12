function fibonacci(n) {
    if (n==0)
      return [];
    else if(n==1)
      return [0]
    else if(n==2)
      return [0,1]
    else
    {
      ans=[0,1];
      for(i=2;i<(n);i++)
        ans.push(ans[i-2] + ans[i-1])

      return ans;
      
    }
    
    
  }

n=prompt("enter the number")
console.log(fibonacci(n))