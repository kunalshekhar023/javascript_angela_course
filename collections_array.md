var array_name=[item1,item2,item3...]

- we can access the items using index like array_name[i] where i is the index or position of the item.

- we have many methods that can be used with arrays.
- Eg. array_name.includes(item)--> returns true or false based on whether the item is present in the array

- example usage

```
guesList=["ram","shyam","sita","gita"]
input=prompt("Enter your name: ")
if(guesList.includes(input))
{
    console.log("welcome "+ input)
}
else
alert("sorry " + input + " u are not invited")
// input.toUpperCase()
```
