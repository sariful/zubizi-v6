const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './source/partials/**/*.html',  // Adjust this based on your file structure
    './source/html/**/*.html',  // Adjust this based on your file structure
    './source/js/**/*.js',      // For any JavaScript files that use Tailwind classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF7E5F, #FEB47B)',
        'product-gradient': 'linear-gradient(to right, #eeeeee, #ffffff)',
      },
      colors: {
        'grain-url': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAADa2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkQ2ODRCMzdFMEY2MzExRThCQUU3OEUxREUyN0RDRDg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk5OEZBNzA4M0IxMjExRUE5RDI2RUIwQjlCODE1QTU1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk5OEZBNzA3M0IxMjExRUE5RDI2RUIwQjlCODE1QTU1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkYTk5NjBmLWVhNGQtNDdjMC1hNjE5LTUxNjBlZTJkNDU2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjg0QjM3RTBGNjMxMUU4QkFFNzhFMURFMjdEQ0Q4OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkUESHwAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAADFBMVEWLi4tHcEx1dXV6enrxyxu9AAAABHRSTlMJABAbDjzyrQAACPlJREFUSMcUld9vFNcVx+86c9cswWjHnjveMRixyBNqqrRQeaE8VNpx5q53DUvuXd9zPWO81OPMLF41roy0DiFtpG66Q4PUVF7YsdkAUizZFn2DqETNQyWIgFZqK8XUdgtRK1UC8tSHSv3x2q3OP/DVOZ/P9yDo3TNOLI2V2FUqQhswrwqJdzsEZcm8WaIi8SbQvGRhuxW5CcgQmEfaL5jehpYYh1GfLMfEkjinDFLjVBY1WrnT3/UdbR+tq96FcO8/VU9TOQGCEo0u5+RPojwBTdnmmSjOeHaJ2ClAfjRFk9w+e8HNDUV2T0F80TXXr7rcRALKm7C1v9K3Ojo5Rw6QHmcmaSrffMYRr2q68lSwbM8x0vNvek/L4cLUxGQDEJz1tosRPZMW0C8e/xZbRFzajvC0jQzYHkiROaoXgNxckbsG+PQz+Ac7xdGagXlOANHVmwEXnSzlnpomVIMi+rpt7TnJ0+7DloCAkKbAfSSWlATBOL5i0QhmS+AP57WVSFnSclUUfIzcuz+6fm4TaBlrwWu0l93IMvuku950kVP0Xg/Gt3yMlW2pHN/FA5gVF7DHO9m4AC7nLYodSv4/zKn/Ena2kLFAtTUXe5Mhj2vQenuvVhHiBMB1JBd7NLrs2JXDGxqThd+TP5/nUYhzgCYo74+bdK3UvYSxpvVKodAYr4fP0Z9UK47hca70rg8TNGoSyDRCi72vompi3kunchbRwsut+k9bc9y4CFdbynNE/6KWfFufmYbeg8Npw7GhFeMwbtuoSrNNfL84uSZ66fdXQFB3skgmo22J+Jm5z7cHgF8F4QMn34MkGZs0IF9BCXvFUwhUl5LR/Y/ILtkeXfc4SEJQq5Iwm2KZTJjtkMbMxecTI7Zt3nE4KhdxVLgehPJamLYZLSZhB2QhAImgIZZTNg3APofL8bYttqZZeWJJvYGMgNkcstTUPmrvYTNK7ZpUtw+CfQxhM7YsGvYf7EYg6kzgNuZtn5mBhe7gAuev/VFD9I1K+dA1Izg6YQeUgo52iOt4TcyCjWh7vuW23rGKy6mVqgiQhWm+NkRtu35w1fsWB9KUs4X2wKqB1rsPAFfWvv67zsCyp7qGK/yBByM+Rckfs9+5uVdMyASkGbITH4VfOYvUgPeQKfp4oXwhpMEjNcM6MjLCFKJwQC7ALTPj5yPiUB4Xo6e+pqvQpu4Iwoa+CWsk/lAQEK0sDAOGuEULHX+o/dZwExK0W6/QubthaefcQups9Z0S6pBLxZh0TLfQjtmQh/HAMhppR0dJ8TaZzlilzJL2s1iAWZGUhDW8xhkCY+hQllre5pOVSwDSh6EkVZ+4XoD+SyHLq9kgSssbq4v76dSYtFLscNDxNFCXVNIuKeQ7n+7AgD2w4EiNbBzTkWqPUf/WddOoDzfGgD8SeW+r1+8lHH3MhcNGfDV225IiCC5ywZudC88toARyownB4JaAVV63+KEGhO9V67cF6qJUiG5qBxCLbcadsx02BPxqL/sSaR303G3gCdcvpV+WqCQLjm18DjlEVf4WqIVCwiwB8MLxXmYNcGj4eRSL7NTux1/EBKEF8jAA7tWoxMCyaOy+Lo9gb5Y0V59ZFvkMwGdGOkdnkOssvhRLv74XKkGZr6tWWN4zqCnJYUBqK8OvPoCl1tK/6HkBGuh8qKl2Kznkrm9mXZD5pIyRBH3DXvcFT52YAIyaqZRQbe837v7A2E8CrBVUEjiCtJDvBmvk7hSm1XQiOT16FHK8HSpCzqD6o2/wR5IcLXNYrMe8+WWAtkZnBgFxj+UkePN2q4FJLRAbl5ejdNJmOUTmXg5F0boIpv/aFODHxUHtTq2upl3EsvSRSW6o4mZs6ACsa1oslXWpm5VoDod5oIE6D67IFqu937YhVKisLqN7xhiJxIedR1HgkZP/TJlcUDlllSuo/wUn4WaLlCpdAwFEXiKvuubPGyMWWpdgM1WPSW3TJ8S4TFZ1Ulv8W1ZFlP2w716JDfXnNgDPKldMKdYOy8zOU7QF+kg3kWTy0vtiBlwrTaPBdtpxu5BNsUrKpldM6x7Vj7/S9iDi8ge2gcR6/dPThUg1KkmgUTI9w15UuCzZZbR8+gGJDvGWVboCLre41VnVcDuz+wLiJvVuBwJUqGYtSM5EVpdNtkSMoyje6NTLAcg/ic98iXs69JH01CIbPYU+GVJq3YblepZDLdJXpaVBKt/8ygpQHjsXxVyGNCMAqCqwqPPaZrHe1NGr/wEIVkWY6eCU12pnzY3JsA0laxVdC8jDBN8X9shXmxi1G84ZOdvlY9bfoZcOHPNr5xkeGUvuE0K4lahW7JQVAlNfa8hca/RD1qwJvD3JsX6F5MIPkD2m5z1bxsWmUo3cI5RVX8g+Z1A/hD6YBu8pGXphsr0ae/dIGIdoJcJl3kDa/xqsg9UmgjAAwBPcTakidGRnbQ6RGJJgjio9ibAbdppEW5nZzL+70zbSQDaSQyARUwRFFDalgkjWZJoEFFrQKngTvHuwJy8q5gG8eBUP3ts3+I4fsccImlfVob3BLjQ8lX53+ENr5l8hgZdICcpkNqwTOdL9cY2wNznLOxUAXTbtqeswxbidJ94qbDK47jLE91/L236QyQUjrBbyUNK3/OQnviNRWmJrkVO3p4W8DM7qvBEJux/PAIWpz/d0N5ChFoREsCN8QB56ZXJfR8azj3w2Ny6HNnyo/QaXVFuQpY9LgNTbcG0SmqCnxN3IJRkFbi81sHomei63hMR7XXZ2ezc8kkFuHNFACTJHnG/vB4x6w+Iv6MgKv0Ru1YkxD2ooLYatlW7UkNAFOzuypn270LZf8hunQzmDHTwXg791ahQ8ojrEG3giNUXfQexugovBvwa9rzFn/1VbaHmTIZPVSgs3mz5YKomrlE3AZT+XMaSRdaxTiQ1Ok+k4EWtXFGa8WCGlB8g5nwterDTgva19i3FI/0T9R9I9kIB2SCdjs72gmEjwJ7oBpLJYF9JoKZSg5Ti5psU6hLK/Hq87g1RN8ckdQOf4U/kFbSS82PBVbmzSajaketnMoIYAc4kP6PG8QBxM6L8ozMNF2c6dAEI0IviyhidUAAAAAElFTkSuQmCC")'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
