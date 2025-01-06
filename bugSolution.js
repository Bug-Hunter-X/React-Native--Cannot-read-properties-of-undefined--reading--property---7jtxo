The solution uses optional chaining (?.) and the nullish coalescing operator (??) to safely access the property.

```javascript
// Solution using optional chaining and nullish coalescing
const userName = user?.name ?? 'Guest'; // Returns 'Guest' if user or name is undefined or null
```

By using optional chaining, the expression short-circuits if `user` is nullish.  The nullish coalescing operator then provides a default value ('Guest' in this example) if the `name` property is also nullish.  This prevents the error and provides a graceful fallback.

This approach is more concise and readable than using multiple if checks to handle the different null/undefined scenarios.