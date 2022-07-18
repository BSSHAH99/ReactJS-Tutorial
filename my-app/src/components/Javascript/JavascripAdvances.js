import React, { useEffect } from "react";

function JavascripAdvances() {
  var v = 10;
  console.log("var value", v);
  v = 20;
  console.log("var Reassign", v);
  var v = 30;
  console.log("var Redeclared", v);

  let l = 10;
  console.log("let value", l);
  l = 20;
  console.log("let Reassign", l);

  const c = 10;
  console.log("const value", c);

  // value={select[key]?.startDate || ""}
  //   Array and Array methods
  // forEach
  const arr = ["bhavik", "ram", "syam"];
  arr.forEach((items) => {
    console.log("This Is For Each Method", items);
    console.log(typeof items);
  });

  // bhvaikramsyam;

  //   includes
  console.log(arr.includes("bhavik"));
  console.log(arr.includes("shah"));

  // Map, Filter, Reduce
  console.log("map, filter, reduce");

  const arrNum = [5, 1, 3, 2, 6, 20];

  function double(x) {
    return x * 2;
  }
  function triple(x) {
    return x * 3;
  }
  function binary(x) {
    return x.toString(2);
  }
  function isOdd(x) {
    return x % 2;
  }

  const outputmap = arrNum.map(double);
  console.log("output of map", outputmap);

  const outputfilter = arrNum.filter(isOdd);
  console.log("output of filter", outputfilter);

  const outputFinfind = arrNum.find(isOdd);
  console.log("out put of find", outputFinfind);

  let marks = [50, 80, 60, 45, 10, 80, 90];
  const fruits = ["apple", "orange", "pineapple"];
  const mixed = ["str", 84, [45, 91]];

  const arr1 = new Array(75, 84, 51);
  console.log(arr1);

  console.log(marks);
  console.log(marks.indexOf(45));
  marks.push(120);
  console.log(marks);
  marks.unshift(15);
  console.log(marks);
  console.log("this is pop element", marks.pop());
  console.log(marks);
  console.log("this is shift element", marks.shift());
  console.log(marks);
  console.log("this is splice", marks.splice(1, 3));
  console.log(marks);
  console.log(marks.reverse());
  console.log(marks.concat(arr1));
  console.log(fruits.toString());
  console.log(fruits.join("***"));
  console.log(fruits.length);
  console.log(delete fruits[0]);
  console.log(fruits);
  console.log(marks);
  console.log(marks.slice(1, 4));
  console.log(marks.slice(2));
  console.log(marks.sort());
  console.log(
    marks.sort(function (a, b) {
      return b - a;
    })
  );

  // let outputr = arr1.reduce(function (acc, curr) {
  //   acc = acc + curr;
  //   return acc;
  // }, 0);
  // console.log(outputr);

  let outputreduce = arr1.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);
  console.log(outputreduce);

  const arrNum1 = [5, 1, 3, 2, 6, 20];

  arrNum1.every((num) => {
    return console.log("output of every", num > 18);
  });

  let ansofsome = arrNum1.some((num) => {
    return num > 18;
  });
  console.log("output of some", ansofsome);

  let ans = arrNum1.find((num) => {
    return num > 18;
  });
  console.log(ans);

  const fruits1 = ["apple", "orange", "pineapple"];
  console.log(fruits1.copyWithin(2, 0));

  let ansoffindindex = arrNum1.findIndex((number) => {
    return number > 18;
  });
  console.log(ansoffindindex);

  let myjob = {
    name: "bhavik",
    mob: 9998555772,
    isActive: true,
    marks: [1, 2, 3, 4],
  };

  console.log(myjob);
  console.log(myjob.name);
  console.log(myjob.mob);
  console.log(myjob.isActive);
  console.log(myjob.marks);
  console.log(myjob["mob"]);

  console.log("Object.keys", Object.keys(myjob));
  console.log("Object.values", Object.values(myjob));
  console.log("Object.entries", Object.entries(myjob));

  let a, b, d, e;
  [a, b] = [1, 2];
  console.log(a, b);

  [a, b, d, ...e] = [1, 2, 45, 87, 65, 97, 1, 15, 31, 46, 61, 54, 41];
  console.log(a, b, d, e);

  let abcd = ({ a, b, ...d } = {
    a: 50,
    b: 60,
    c: 80,
    d: 84,
    e: 54,
    f: 65,
    g: 85,
    h: 90,
  });
  console.log(a, b, d);

  // Promise+

  // Pending
  // Fulfilled
  // Rejected

  // useEffect(() => {
  //   console.log("**************");
  //   function func1() {
  //     return new Promise((resolve, reject) => {
  //       const error = true;
  //       if (error) {
  //         console.log("func: Your Promise Has Been Resolve");
  //         resolve();
  //         console.log("after caling resolve");
  //       } else {
  //         console.log("func: Your Promise Has Been Reject");
  //         reject();
  //       }
  //     });
  //   }

  //   func1()
  //     .then(function () {
  //       console.log("krshbgbrgirigfbsiu");
  //       console.log("Bhavik: Thanks For resolveing");
  //     })
  //     .catch(function (error) {
  //       console.log("krshbgbrg*******irigfbsiu");
  //       console.log("Bhavik: Very Bad Bro ");
  //     });
  // }, []);

  // async function bhavik() {
  //   console.log("inside bhavik function");
  //   const res = await fetch("https://api.github.com/users");
  //   console.log("Before res");

  //   return res.json();
  // }

  // console.log("Before call bhavik");
  // let bs = bhavik();
  // console.log("After call bhavik");
  // console.log(bs);
  // console.log("lst line of asynk");

  const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };

  const dogName = adventurer.dog?.name;
  console.log(dogName);

  // useEffect(() => {
  //   function greet(name) {
  //     console.log("Good morning " + name);
  //   }
  //   setTimeout((name) => {
  //     greet("bhavik");
  //   }, 2000);

  //   let id = setInterval(() => {
  //     anim();
  //   }, 1000);

  //   let a = 10;
  //   function anim() {
  //     a = a + 10;
  //     if (a === 5000) {
  //       clearInterval(id);
  //     } else {
  //       let target = document.getElementById("test");
  //       target.style.marginLeft = a + "px";
  //     }
  //   }
  // }, []);

  // The Spread operator lets you expand an iterable like an object, string, or array into its elements while the Rest operator does the inverse by reducing a set of elements into one array.

  //  REST
  function sumtwo(...agrs) {
    console.log(...agrs);
    let sum = 0;
    for (const arg of agrs) {
      sum = sum + arg;
    }
    console.log(sum);
    return sum;
  }
  console.log(sumtwo(1, 84, 541, 32, 54));

  // Spread

  function sumone(...mya) {
    console.log(mya);
    return a + b;
  }

  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [7, 8, 9];
  let array4 = [...array1, ...array2, ...array3];
  console.log("this is array3 ", array4);

  let mya1 = [5, 6, 1000];
  console.log("this is myarray 1 og", mya1);
  console.log("this is myarray 1 og", ...mya1);
  // let mya2 = mya1;
  // mya2.push(50, 60);

  let mya2 = [...mya1, 4, 5];

  console.log("this is myarray 2", mya2);
  console.log("this is myarray 1", mya1);

  // let abc = new Array(...mya);
  // let xyz = [...mya];
  // console.log(xyz);
  // console.log(abc);

  // console.log(sum.apply(null, mya));
  // console.log(sumone(...mya1));

  let obj1 = {
    a: 60,
    b: 70,
    d: 90,
    e: 220,
    f: 9910,
  };

  let obj2 = {
    a: 60,
    b: 70,
    d: 90,
    e: 220,
    f: 9910,
  };

  let obj3 = {
    a: 60,
    b: 70,
    d: 90,
    e: 220,
    f: 9910,
  };

  const obj4 = { ...obj1, ...obj2 };
  console.log("this is obj4", obj4);

  return (
    <>
      <h1 id="test">Hii Bhavik Shah</h1>
    </>
  );
}

export default JavascripAdvances;
