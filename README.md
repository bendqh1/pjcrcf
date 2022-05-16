# PHP JavaScript CSS RTL Contact Form

A CMS-agnostic backend-frontend simple contact form for one recipient which is aimed solely for Right to Left (RtL) languages and allows appointment setting to allow service sale automation (SSA) for freelancers or SMEs (with normally one person handling emails).

## Software requirments

This program requires:

* A well configured *DNS records hosting*
* A well configured *website hosting* 
* A well configured *website emails hosting* comprised by itself of:
  * Local Email Server (**LES**) such as *Postfix*
  * Local Email Protocoler (**LEP**) such as *Dovecot*
  * Local Email Client (**LEC**) such as *Roundcube*

## Language

It was originally designed in Hebrew but one should be able to change the Hebrew to any other RtL language such as Arabic, Aramaic, Persian/Farsi, Azeri, Urdu, Kurdish (Sorani), Dhivehi/Maldivian and probably more.

## Installation

1. Download all files into a folder named as this project.
2. Execute PROJECT_DIR/index.php as you find convenient
3. Edit the email address in behavior.php.

In MediaWiki I execute index.php with an iframe:

```js
<!-- Don't add text to here, otherwise it will appear alongside a success message; -->
<html>
	<head>
		<script>
			window.addEventListener('DOMContentLoaded', () => {
				const iframeToWorkOn = document.querySelector("#prcf_iframe");
				const paddingedIframeHeight = iframeToWorkOn.clientHeight;
				iframeToWorkOn.height = iframeToWorkOn.contentWindow.document.body.scrollHeight + paddingedIframeHeight;
				iframeToWorkOn.height = parseInt(iframeToWorkOn.height) + 50;
			});
		</script>
	</head>
	<body>
		<iframe src="https://example.com/pjcrcf/index.php" width="100%" frameBorder="0" id="prcf_iframe"></iframe>
	</body>
</html>
```
