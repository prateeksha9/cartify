import React from "react";
// import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

// import firebase from 'firebase/compat/app'


class App extends React.Component{
   // state
   constructor(){
        super();
        this.state = {
            products:[{
                title: "Mobile",
                qty: 1,
                price: 30000,
                id: 1,
                img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcTFRUXGBcaGxsbGxsbGxseJBsgGxoaGh0hGh0bICwkGx0qIRoaJjYlKS4wMzMzGyQ5PjkyPS8yNDABCwsLEA4QHRISHjQpIik0MjQ0NDIyMjI8MjIyMjIyMjIyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAPgAywMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABEEAACAQIDBQYDBAgFAwQDAAABAhEAAwQSIQUxQVFhBgcTInGBQpGhMoKxwRRSYnKSotHwIzPC4fFzg7Kjs9LiFVNj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAIBAwQF/8QAJxEAAgICAgEDBAMBAAAAAAAAAAECEQMhEjFBBCJREzJhcYHR8BT/2gAMAwEAAhEDEQA/ANmooooAooooAooooAooooAooooAooooAooooCP2ztFcNYuX33Is+p3AdJJFfOPaDt7jMRcZheZEnyqpiBWt982P8PAi2DrcfdzVQZ+rLWLYHsnib1lb9sIysCQMwDaMyfFA3rz4ito1JvofbP7ebSsgMLzsswM2oJ/OrPs7vnxKwLtq2/Mjy/QVn+L2TirYyPauhV1+ySBPVZH1qOR4BEAzx5VhjN62f3x4N9LiXLfXf9BVr2f21wN6AmIST8JMGvlalLaT8QB60B9hWcQj6q6t6EH8KWr5Gw20MTa1t3XUDXyuY/GrFs7vN2jaj/Fzjk4n5UB9L0ViWz++q4NL1hSOJU6/LdVq2b3tYC5AfPbJ4ET8yKA0OiojZfaLC4j/ACb9tzyB19OpqXoAooooAooooAooooAooooAooooAooooAooooDEu/jHTcs2P1Vze7Ez9FWpHYOGNqzbtiPLbTXTjGffu4n1FVHt/e/StsFAdA4SOiQrfRSa03YeBU2vEdS0eVVUwWmI1JGpJA3jdVppJtnXGu2yOwzQPEgAxBAEagsASd/2lj+tLDA4e+Ye1buKix50Umdw1I5ZvpU7Z2XauW5QlQ0geZWg+bkSJB5HhXOE2G1tCFcNJmSCOg57hRtbKc01RStodgsDcPkttbYnUo7aezZl+QqExvdWN9rE+iun+pT/AKa0/wD/AB9xZ8pjhGuntUfj7uWFkhiDA3cI/GKmrdItRg10Y7jOwONTUIlwc0cfg2U/SoHGbKv2v8yzcQDiyMB8yIrertwKAsblGvTdH4U72WfKWPGPTdp+Na46smWJVaPmyivorG9n8JdJNzD2nJ3tkAP8QhvrUJi+6/BXI8IvbOmivIkmIIcEn2NSc/psxjCYt7TB7bFWG4ivobs723D4Wy1zVygzGN5rHu2PZEYHwyL3ieIWAXJlICxOoYg/aA4VrHY3snbuYGw7mGKmR6MwHzAB961ENOLo0eiiisMCiiigCiiigCiiigCiojaXaPCWNLt+2p/VzS38KyabYPtfgrhCrfUFjC5wyBjyBcAE9JmgLBRRRQBSGJvhEe425FZj6KCT+FL1W+32O8HZ99+JXKOuYgH+XNQGEbFY3cfcusJy52J6nyzPPzE+1ahsTaJRGQoLluB5TzEag66kAHdwEVnPYHD5lu3J1LAfJWJ/8gfu1eME8E5eHTidV37hAy/erol7T3Ysalj2i2W9s2RbbMjIqSTpIHlzE+XU753VIYW/aMZbnDcSRy4NBqjLbNy41tT/AIYjxDzBUBV14lRGnM1Nv5RyJJLH1JJAqZIn6C6Wi1k6UnkB3iR1qkLji1yLbFVQGYJEk849PrUjhNr3QBLZvUA9OGv1pxZkvTSXTJfE2LL3PCKa5C0jQDVRGh1JmeXlNdts5B5AxHGDrx05cdPakLe1GzAMgM7yDER01nX86X/TLTMHaQRoJE85iJjfBPTpWHJxkji5s9x9kg/Qmmty0ymGBH99KlWuK4hXEnk0Hp1GsUjjmARVOrTJgkxvnU6xrWGxlK6MX7zL3iY+xYGoRFkdXYk/yhK3rZmG8KzatfqIifwqB+VYLstf0zb7N8IvR6rbIT6qlfQtDlJ2z2iim+KxSW1zO6ovNmCj5mhI4oqlbW7ysDZkK7Xm5Wxp/E0D5TVO2l3pYu5Iw1lLQ4M3nPzML9DQGxuwAkkADiare1u3WAw8h8QrMPht+c/y6fM1hO29rY68Zv3Ltxf3vKPuroPlTXZ2BLsWIOQfZkRmPpxAoDTtp97TNK4XD/euGf5V0HuaqO0+0u0MTIuX2VT8CHKPkkT7k0kmGpdMNW6NoZ4LYD3Ea4CpAdEIZ1BLOYHl3xzY6aHXQw4xeyLdrKbNxWuTcW4FE2yEcqmb4biXF83MdNKdphelLJYrLHEv3drt03bZw7kkoqvbzEswtklSjE6k27iuknUgKavVYr2RxX6PjU35Tcg7oyYlcpJ6Ldtg/wDdraqGBWZd9+PyYO3anV3J/hEf6z8q02sJ78caXxVqwuuRVEftNJ+oZflQDfsrhQmEtON5LM8ci2nvly1ZbWUnMNxMH1BBH5GqPYe9h7oRNUyKrACZCrBlTv3Hdz9qtmEuDO6ScpjSDpG5tRMnQeynnXRN0fVx6VfGiZ2cAVuEcGGvMwMv1Y6dKeYh9I4RTbZQK2Un7R877zq2sDmdQPQUpdNZ2ykt2xvhsOBMaTTvCoJ9Pzj+lJ20MjlP4CadWEltNx39I/5o2TOWxQPAY8W0H8M/mK9w/m14c/6VxdSWjlI0666+0fKlRoIH9+lQyYw1+xUkbhTfHYgWrVy6dAiO/wDCpb8qC/Kq53gY028BdE6vlQfeYZv5Q1YbKHGLZWe5rBm7jRcbXLmc9cqldfvXEPtX0DWTdx2z8tu7dI+FFHqxZm+gt1rNafLMw7ddu7ltzhsJowJVn0mVjPlnRVUkAtrJkDcSM5xFq5dbPeuvcY8yT9Wn8qkrljNfcnflM+v6Ric/88n3FOVwdS5U6OkYWrIi1gkXconmdT8zTlbNSi4TpXQw9ZzK4Ectqnq7PueH4uUlJieWpEnkJBHr6iXCYfpT63cIQJlEgFZPAHPu5H/Ebpu0kA05DiQ62aXTD0/XD0smHPKs5Chitmu1sU/GGNd+EAN9ZyMogNp4UhrbLvabc8meHtn2u27f8VbHsPHjEYe1fUyHRW9yNfrNZltLDeJauW0+2VlDydfMh9mCn2qxd2m1vER7G4CL1v8Aduw7KByRny+s8quLsiSovdfN/ai+cVtlsvmi4YjituWEfdUV9C7UxXhWbt39RHf+FSa+ceygNzFXr06KpAPEF2CiOsBq6QVtIm62WxcMLsOdGUlgTGktLDUkjSAfWpRsMLlpQsi7b3bpMAxqwjUEx/SoE5rdwMfsliWjdqJPoCQD7e1P7EpdR8xyMYMcCTK+0mCP6V6njO3/AEtoseAYZFA/VH1C/wBTXUEEyP7EfnH9iksBaKrzILD3aCfqTThhmke3/wAvyrzPTPdGTatnqOI6D+/nTy0cic2Me55DpSCWQSAT1McopygLEsdN8ehj6mBUtkTqTo8HLnqetclaUyH0rtFAqTrdLQ3yRrWed7WI8mHsfrOzn7oCj/zb5VpN87qybt05v7Vt2V1KKiRwzGbmnU5lHtQ455vhvya13abPNnApIILsX14iAin0KopHrVvpDC2AiJbXciqo9FAA/Cl60+eY32pwfgY9xByM+YcsuIWdOi3bUf8AdoyCrH3obOLCzeUDMc1mTzeHs/8ArW0+dReAQXES4v2XVXHowB/OuU+7OuN6oZLbJ4UsmG51JiwBQCo3Cos6DNMNyE0quF56U5ljuEV54U7zNLFCIVB1oJJ3CPX/AGpfIK8LgVlihIWid5NdLYUUlicclsSxAnQcyeQHE1X7mKuXydGVAcuUaSRvzHjuPTdpxrrDHKX6InJRJrEbVtW9M2Zh8KameXIH1NR/ZLHeDjkkZQbjWiJnyXibtsaaQHa7P/TA1imFkAN4aqdDBOgA46md/QdetIY5ouBlJ8yMMwB+1bm6mXmSi3lEfr13+morRw5uT2ad3m47wtnXTMFsqj55j9FNZL3e4b/BuuR9p4Poq6fVmFWXve234mBwoBH+IM7AcDAX8fEHtTDsnayYW2nEpmPXOS/+oa+lbiXuK42PmszAI5+/P8TSQwZFt7cwrDyMZ/w2+Gf2JjXhrPOpW2g0n+5M/wBK7RMr5SNCD6QdI6HzfTfur0OZqgktjgXP8O26rqfOBuktpr1lpPpS6AxLEcSfUR6wP6U1w1sqfD3gNmU9AASPlBniWPKnrgnMsanQev8ATdXmZ9CMrjaFcMhZQ5+yfN1Omg6Cn6LB1rm2ogAbhoOsflSmaNag885W9HWlci3QopbMKmio5GhrdtmKx/s6Di9slwdGv6EfqhxuPPw1PyrWtvYvwsLevcUtuw9Qpyj5xWf9x2ys918Qd1vpxZWQfQvVIjNk5JI3Oiiih5iG7V7PN/B3ra6PlLIRvDp5kI6yorO+zd7PbZBoFbOoO8LdAuqPRS7p9ytcrH/C/RcfdsiApZ0A/ZbNiLP0bEj7oqJq0Xjeyc8Mf817oKQNw1yTXns9Ki/Is10Um16krlxVEk/30jU00uY7kAv7x19gKtQbDcYjwsabXMbbEjMGYb1UyfSBuqLxeOtj/NuMAdNVcKZ4aCCPWa4wb23lbL2oGpVGE6843V1ji+TlLL8DdbbC4bjmWffMDKP1V19tBTp8Ux0RXIiBpAHMy/P0pdLDA/YEcwZPuIpQON068q9NWea0hgLFxtSVT0GY/M7vlSONwBVDdBZ7lsi4uY7yhD5YGkEAr71MKJ3V1lraMsz7tSxd8PhVOi+S3qTKPcZrZPUh596sdvGC1cybgvlj92RB+R1qC2HhRc2paRRKWvMJ4C2hYT94KPept7YZ2kSCxBHqfxg6cqrArspyotOBfxEBUaydOm+PlIHpT11z2wQeB16jQ6cDIPyqqbGxD4dmRiXQ7id44ANPKIk8DrVuVpl1OjaxyYaH/cfs/PZxaZX1LQ3DQS8agBmgciAT6lVaOhqVwokk8tAekA6fT5VEYTQheAmB01YT6QR96prZ1vKirMwAPkIrlNUemOT2Kh2q1ydTXtx9IG80INK5GHSmvZmvGFdotDGin96uM8PZzrMG46II9fEPtFuPepLuZwHh4E3CNbj7+aqBH1Zqp3fLiJbCYZTvzXCPUhEP0etZ7H4MWsFh0H/6w38fn/1UOMuybooooSFZp3mYU27tvEqD5lMgDe9g+Mvu1sXUH71aXVb7dYM3MHcZRL2it5Ruk2zmIPQrmHvQFKbaVuJBkHUR1pq+0WP2VplsfDrkKLqEYop5po1szvM22Q+9Sq4XTgK5qMUejm2Mka42v13UqmHM6sD0A/v86clBzJHyHtXTQBAG7gN9UrZDG9zDBspCoSOLDVRxywDJ3aaetVm/sa9YuZ8I6qGBzhmXKiqpdmZnH2AATxbTjMVoFm59krb8NnF0IcxBVYC22ZixCsXzLm0jU6aVVe2Ow7t64lw3WC5LYe2rAkFjlvsJcIrFERiBOY6GIrfNmdqh/sFLzpc8e5Z8RYZEtnNnQoj58wYiCjhhuMA6CnptK2/51nuM254WMN7CpcVzKFLyIPJlFu3aW2hLKq24X7ZLQN3F5s3b2N8he2jIZ8zDIzQCYEak+U6Kh4+3RSOVFxewy/tDp/Sm2KvBbbmYgH57h9aQ2F2lt4klFDq8ZsrRqNNQVMHeBzrztlicmFdjvOg6b93vFVydCkQXdrbzX8XiTPlTKPW42b8LZ+dXvZGDtFLjBwLlwMIzKGykNuBEkeV2gH4SYMCKv2Fsm1su7d0m67ETO5cqb/UPUnsu9dWGVA0ghSyhomQYYaqSDGhEg6yK6Y4ScbXyQ5R5U768fJYtvYVHs5zOZcoghegbzfa5tB57hxZ7Cwb5XzEqiJ4jMBmiBIAHxEqpHoo94TaW179y5LZVXMxyLIXMd5YOSZ1O4gQzRlJmrR2T2slvOrTlYDQ65H1OWRvQ5hB/3C04yjHZikpStHuH2XbKDE2bhZch8jgBgA4DHQ8MsegGtPfEywBS20ds2LYIU+e/KrABACqV1ZREATAk6mjZGXxC7RorMPaPymuFuVtr9HV+1JWBtsolgwniQR6RNe2xXPZ7GXbgdLis1s65mBA80kwW+0B0mPauVYx5QSeAG8xrpPHSpf3OK8OvwZiyuUVJprXT7FGOsf3/AH/SlSYimhv5VdzbfKCgUlWUklSX8rLMAwN3PlSguAjNw368t869KxrbXlHZT5K10ZN2sJxe21sj4fDtL6wGP8zsPavoBFAAA3AQPasD7tU/S9rviDqpd7mvCSzL8jlFb/WHN9ntFFFDApO4oYFSJBBBHMHQ0pRQGHYZTZv3LIbQG5bmI1sPA9zae2P+2aklJP01MactI0/HXQV329wng41rseVwl7fAGSbdweuR7jn9wezxUA5ac9wrHHZ0jLQkicTqPx9K9LAdCRu5V07zuOvD/YUkmKicp9SD+J4VTMQ4e7dcBSxFsAQCSB0heNIPkmCQ3p7HjwpI3c/H31M+nMdRp1plfuokl3gKJYyBlHU7lE/vE1NG2PVZUZbmS2HQT4hVWKwJmWHlG/pWWbcxvi3bhV3a2XZwGJiWJZiF3CWZz96n23+0LXptW/JZHDWXji5OscgffXdCW0BjMdJgxvjpWqKu/JLZofYvZAtWxeYf4jiQdDlQ6gAgnfoT7DhTLvHxUIlsHfr7E/8A1qZtdqsGSALsToAUcR6nLA+dVTtYwxGNtWQZVmVZGujMFMR7musqrRzXezQ9nbMA2dh7EAMttWjkzDOwPWWaqYMbdw1wOC2VWMr6zII3E79enWr5exYtoWiSWyooO8kkAa7t1V7tHaY3GtXERXU70JIOYBgDO8ajXhXs9Pjk00l/vJ5smSMXsc3MStxUuBs6uBB3yNw9/tAjgQad4B0UhWSNACwJ4ajMDM8vkOVUO3jHwj6qWtzL2zwIIBYDgdN40O49LU+KQPKkPaZJBB4aEeWd8E6Rx3bqcG9FWk7JHtA6r4BGaRc8PzcCUka85tx1JNWK2xAUgwRB3wR1/Gq5tJPGsnqqNMzLLPmkb5HEdfebwD57aMdTAnqQBv6xXna9qO7dy/hEy+LuMuV2MRroBPrAqM2jhvEtvbkrmUqCpgiRv0/DjS4ufD1/Af1ilracSK5C/gZ9nLb4XCJYdxdcOSZzEKhYtlQsNYEATunpTbtbjvDweJuzB8N46M/kX6sKmbiKEJiqH3r4vJglQb7lxV9lBc/ULWarRTtu2e9w+A0v3yOAQHmGM/TJ9a2OqN3R4Dw9nI367M3sIWPmrfOrzUAKKKKAKKKKAp/eRgFfCi8yg+CwLGJPhv5Lqj1Rj8qpuyVZ7ai42Z0m22vxWybZMcJKzPUVrOOwq3bVy0251ZD6MCPzrG9ju9trll5DQDGhJe2fAuf+3bc/9ShqZK/owEl2n6D06j1JpB8YkwAIHE/lpM+gFc3bXxMfQak+n/ApG2hYnyzHGhR5exQbTU+gI+Z31C9odlPdtoLbKsEk29wbgD7AGBHE86nbyhR+Q0H+/pTFsV5oBgT6DpIFDTNrtsqxVgQRoQeFJzV+7WYFL1s3k1uWxrBjyyJkRqddKoJqiD0a6Aa1ZOztsNtJP1bQ16ZVyD0GYioTZgm4gO4HMfRQWP4Vbe7ayGbE4hxJ8qA88xLN+CVUfuRMui6bRwhuW8q7w2YdTBkTw3z/AM03ewbwh8NkulgXvZiJ0hvJuzGJJG8knSak0aFGu76kzH4bqUsEsRpJJG76e+te2PqHBUvHXZ5ZenUnbK52o2UpZbuQeVpJHUZdeckpU7jMBgjhnuo1vOtsGUual8oAlCxiW4QDTrFYbxFKxwiCN8ggg9KoeJwly2TbckkQFfmI+I8G4TuPvFXgypqm2mn48/hmZcLu0k9efH5RL7MuHw2WZUBgOOWSCQeI1nQ7pJ3EGpHAYm7lAthYJOVWIlo0MbuR5ayBNROyIdiGgkrv4mNOIn586ndiWcrp4hUgKWt6HNvBMkHKILzBnVpB0rw+slVvdb0vnwenBOcJRSimum34JrBAlQzKVPFTwPH+/SlL20LVohXuAHlqY9YBj3pW281XMTiGVVW3ctrd8Rzd8SF0LDL5nGUpAkweI0rPTxcoXNNulaXz/RueSjL20k77LK2JVgMpBWJka/3xrKu9jEZ8ThcMD9lSx/7jAfgn1rQsIFzXggHh54SDIMKAxU8RmBrMsWn6Zt3w/tKLiW/QIFRv5sxpkgovRkJOStm7dnMJ4WFsW4grbWR+0RLfUmpSiiuRYUUUUAUUUUAVkfbDD/o+0C4gK7Jc9rsWLnT/ADFw5+da5VG7ztneJat3BIhjaYjgt8ZAx6K+Rvu0BWLqqNWbXfAMadY4f0pm2P3wAB/e+o23iS1sO/lkDNJ+LcQTw1BED6b6Qu3i0aQvwji3WOXU/WsLHF7FFt//AAKbPc1rg6/jpru3+sc6cWbKgAxmJ3cvY/EdDru9dKpKzGxTEIww11uBTjx3/PgazxjV07UbWy2/BnzsBOXQKp4HqdPYndIFUk1pg+2fot5/1bZA+8yr+E/Om+z9sX7Ei1ddATJAMgnmVOk6DhwrrBYgIxzCVZSjjjlMHTqCAfavH2Yx1tkXF4Zd/uu8e4rDGT+D7f4pIDrauKN8rlJ90IAPWOdTuxu8pLbKz2nQjSUIeRpvDZes+1ZvcsMphlIPpSVbyZlG67N7a4G5p46qd/nDJ8ywy/Wk9sJbutmturKRoyMGkeo+dYcBUw+zkBzWcSrcV3qQP2tZU1Ucji7Ks1B7Vq1i0Nlrj22hC7wD/iTwgSA6qJjieAmprIYI3NbPl3GQFMfyvlI0O/oaxpNrYy0AfEchGDDNDgENPxT8Q/uRU5hO8fELIuW0cH9WUO6N+o4cudbLJyOuOcYpo2PCA+GHg5W+yY+VeXMHbcy9tWI4kDTpVF2V3o4fw1tXUu2wCSICuq6tGohjoY3cN1WPA9rsFdgJirYng5yGfR4qVJp3F0S4xl2S1y4ttSYAVRJA4AKSYHCs07ncOb+0bmIYajPcPq0j8XFWvtjjgmAxLgyChQEGdbmW3v8Acn2pHuKwGWxevEfaKqp+ZYf+NZImSpmsUUUVJIUUUUAUUUUAVGdoNnDEYa9YPxoyj1iVPs0GpOigPnuzZa47EhdIuanRTcLC5oeIupdGu7TnSz2AnmZgZ3trr+7IH1AG4ATEvu2WGfDYu5kA/wAwlcw8oTEDOIgicty3cGvG5xqBbDO7ZnnX4jBMdAIgekDWtNJC3iLQOUrJ4Dfv3ZpjMfaBO48XNzEC2r3HKlQpbUzJjSdNZIVY46DSmeDwYOv2j0iB0mYJ3acKrXaTagusLdufDTf+23MjkNwHrz0oEXjsU1y41xjJYk/Om1BrysB6a8iiukjjQD7D3rsqFLvJgIZcN0CHf7Ve8H2Wt3bStft+HcOpVdAv3ZOvvNRPYHZviXDiC5Hh6Ko0meZ/V6cavxq4xvs5ykUfG9gVgm3cPOCNT0EaTULhexWJvKz4dfFVQjELvh1DpoYmQeEwQRvrUqQ7C4nwMcbWuVy9rfoJP6RZ+j3UH7kVk4pdCMrMgx2xMVZ8t2zcToVYdeIqNKEbwa+xnQMIIBHIiahMf2RwN7/Mwto9VXKfmkVzLPlGivofaXdFgbklGuWyeoYD0BE/WqrtHuVvD/Jvow5MGU/mPrQGTJcaCoJgxInQxukca+nu7fZ/g7PsrEFhnb1aPyAqh9nO591urcxNxcimcqmSfpA9fpWw2baqoVQAqgAAbgAIAHtQCtFFFAFFFFAFFFFAFFFFAZx3qbNLeFdUasrWZn4pF6z6zcthfvmqBbxOZZAJVhPmjcVlcwBBUa7t/Gtp7YYE3sHeVPtque2d8PbIdY6yse9Yj4wti4wkLmBtxoQt1fETeNcqnLHAqapAbbbx3h2xbWVadV1E6fEJ67tNwnhVSZqXx+IzuTM01oaFFFFAFK4Z4bn9KRr1TrQF67J7VS3cKFiLdzizkgMATJB+yTEadKvjLWJYi4W1zGDvH9f961fsvjfFwlp9xjIQBAlSV0A4aD51cWc5IkzUHtZjavW76xIAYafHhybq+5tnEL7ipx6jttKfCNwCTbK3AOeQ5mH3kzr96rkrRKdM1zD3luIrqZVlDA9GEj6Glqq3d9i8+EFuSTZdrcneyg5rbacCjKatNec6hRRRQBRRRQBRRRQBRRRQBRRRQBRRRQHlfOPb7ANh7joJAS49vefsMTetH3W46+luvo+sm74Nly3iAf5lo8Pjw83Br1tNdWgMUJoooqjQryiigCiiigFkuEKdAfXWPY1eO7jGErdsltFKsq8pkNHvFUW3MGPy/OrB2FvlMWqwSHV1Oo00DSZ3xl+tbF7Jl0ag5pPQ6cDUXtDtFhrWjXVJ/VTzn3yzHvFVTbPbNrim3ZRrYIILsRmg78oGinrJ9t9dXJI58Wy990u0h4htAgrctlfV8MwQfO09r5VrNYd3MYVmvqwHlQXnJ5B1tW1HuUfT/wDnW415zqFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFVjt9hM+Da4FzNZZbwA+IIfOvoULCrPSV60HVkYSrAgjmCINAfJO08L4V25b3hWIU813qfdSD701qydstnG1dAI1TNZaBGtk5V+dtrXyNVuK00K8roJXoSgOK6VCTA38v9qWw7AOpKZwCCVkjMAdRI1E7pq07L2Hj8UAMNg8iFQMwWFPPzXDlM8eMRqaWLKs1tkEMCMwkSIkcxScVreze6C9cIbGYoD9lJc+mZoC+wO75XjZHdzs7DwRZFxh8V055+7on8tYYfPuy9iYjEHLYs3LnDyqSB6ncPerzsTuhxdwhsQ6WV4gHO/sF8v81bnatKoCqoUDcAAAPQClaAiOz2wbOCtCzZWBvZjqWMRLH8twqXoooAooooAooooAooooAooooAooooAooooAooooDNu8nsY2IDX7KlywGdB9rMgIW4g+I5SVZdJERqBWLXtjYhX8M2bubkEf8CoI9wKKKAntj93e0cRBFg2lPxXfJ/KfMR6A1etkdzVsQcViGc8UtjKP42kkfdFeUUBe9kdjsDhoNrDWww+JhnaeYZ5I9oqwUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUB//9k='
            },{
                title: "Laptop",
                qty: 2,
                price: 50000,
                id: 2,
                img: 'https://www.cnet.com/a/img/Dbw40jbu2TxVBNXJX9JSqGnoe-E=/940x528/2020/10/28/9851df19-8a7c-4832-8bbe-d98051904f45/asus-zenbook-13-2020-08jpg.jpg'
            },{
                title:"Watch",
                qty: 3,
                price: 4000,
                id: 3,
                img: 'https://cdn.shopify.com/s/files/1/0027/2357/7914/articles/A22A1281_1200x.jpg?v=1597178612'
            }]            
        }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    } 

    // componentDidMount(){
    //     firebase
    //         .firestore()
    //         .collection('products')
    //         .get()
    //         .then((snapshot) => {
    //             console.log(snapshot)
    //         })
    // }
    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            // products:products is same as 
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty !== 0){
            products[index].qty -= 1;   
        } else{
            alert("Quantity cannot be reduced further");
        }
        
        this.setState({
            // products:products is same as 
            products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        // returns an array whose id is not equal to the 
        // id of product which is required to be deleted
        this.setState({
            products: items
        })
    }

    getCartCount=()=>{
      const {products} = this.state;
      let count = 0;

      products.forEach((product) => {
        count +=product.qty ;
      })
      return count;
    }

    getCartTotal= () => {
      const {products} = this.state;
      let cartTotal = 0;
      products.map((product)=>{
          if(product.qty>0){
              cartTotal = cartTotal + product.qty * product.price; 
          }
      return cartTotal;
      })
      return cartTotal;
    }


    render(){
      const {products} = this.state;
      return (
        <div className="App">
          {/* <h1>Cartify</h1> */}
          {/* <CartItem></CartItem> */}
          <Navbar count = {this.getCartCount()}/>
          <Cart 
              products = {products}
              onIncreaseQuantity = {this.handleIncreaseQuantity} 
              onDecreaseQuantity = {this.handleDecreaseQuantity} 
              onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={{padding: 10, fontSize: 20}}>TOTAL:{this.getCartTotal()}</div>

        </div>
      );
    }
}

export default App;
