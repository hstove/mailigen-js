# Mailigen JS

This simple library gives you the ability to add email to your newsletter lists on [Mailigen](https://www.mailigen.com/).

### Installation

~~~bash
yarn add mailigen
~~~

### Environment Variables

To use this library, you need to set 2 API keys as environment variables.

- `MAILIGEN_LIST`
  - Set this to your List ID. See below for finding your list ID.
- `MAILIGEN_API_KEY`
  - Your API key

### Finding your List ID

To find your List ID:

1. View [all of your lists](https://admin.mailigen.com/contacts/lists)
2. Select the list you want to use
3. On the list page, click "List Actions" -> "Web Signup Forms"
  1. ![Web Signup forms](https://cl.ly/91910cd70235/Image%2525202018-10-03%252520at%25252011.35.34%252520AM.png)
4. Click the link next to "Your hosted web signup form link"
5. Copy the `id` URL parameter on the link that opens. This is your List ID for use with the API

### Using Mailigen JS

The `subscribe` method uses 3 arguments:

1. The email to add
2. Any merge variable you want to use (defaults to `{}`)
4. Any extra options to pass to the [`listSubscribe` method](http://dev.mailigen.com/functions/list-management/adding-new-email-to-list) (defaults to `{}`)

Here is an example:

~~~javascript
import { subscribe } from 'mailigen';

async function addEmail(email, firstName) {
  const response = await subscribe(email, { 'FNAME': firstName }, { 
    send_welcome: true
  });
}
~~~
