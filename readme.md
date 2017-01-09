# Let's parse some URLs

Create a new node module called `util.js`

'util' should export two functions `parseURL` and `toURL`

# parseURL

Write a function that returns an object so that given:

```
'/board?row=a&col=b'
```

It returns

```
{
  path: '/board',
  query: {
    row: 'a',
    col: 'b'
  }
}
```

It should work for the following:

```
/pants?fabric=linen&nice=true
```

And handle url fragments

```
'/sale?items=men#pants'
```

```
{
    path: '/sale',
    query: {
        items: 'men'
    },
    fragment: 'pants'
}
```

# toURL

Write a function that takes an object and returns a string

So that given the following object

```
{
  path: '/webhp',
  query: {
    q: 'wool hat'
  }
}
```

It returns

```
'/webhp?q=wool%20hat'
```

It should also work for 

```
{
  path: '/gp/search',
  query: {
    sort: 'sales rank',
    ref: 'mobile'
  },
  fragment: 'bottom'
}
```
