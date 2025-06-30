- strings can be concatenate in javascript

```
alert("Hello " + myname)
#only the contents within the quotes gets concatenated.
```

- length
eg.
```
var name="Kunal"
name.length
5
```
exercise:
take user input and tell them number of character they have written and number of character left. (max limit 180)

```
input=prompt("Enter the message: ")
alert("You have written "  + input.length + " characters, You have " + (180 - input.length) + " characters left") 
```

- slice

to get part of string.
```
var name="kunal"
name.slice(0,1) #upper limit is not inclusive
'k'
```

