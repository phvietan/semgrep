# semgrep

This repo is to test how intelligent semgrep is

Source code is at [index.js](https://github.com/phvietan/semgrep/blob/main/index.js)
Semgrep rule is at [rule.yml](https://github.com/phvietan/semgrep/blob/main/rule.yml)

Basically in my perspective, semgrep can match code. However if compared with CodeQL, CodeQL matches logic.

Thus, in large repos where many design patterns get implemented, a single logic could spans hundreds or millions ways to implement. As a result, CodeQL should be a better candidate for bug finding, but Semgrep is better candidate for enforcing coding styles (and look at low hanging fruit bugs).
