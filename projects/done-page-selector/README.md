# DonePageSelector

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# Using

First you have to import it 
```javascript
import { DonePageSelectorModule } from 'done-page-selector';
```

and then you can use it in your tamplate like below
```html
<done-page-selector DataSum="100" PageSize="10"></done-page-selector>
```
> Note: this component Dependencies Bootstrap, make sure you install Bootstrap in your project

# Properties
*`DataSum` - Count of data
*`PageSize` - Count of data to show per page
> Note: Total page = `DataSum` / `PageSize`

# Event
*`OnPageChange` - Emit when page has been changed

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
