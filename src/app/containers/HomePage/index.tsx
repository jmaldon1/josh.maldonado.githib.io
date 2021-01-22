import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import { Chrono } from 'react-chrono';
// import GridLayout from 'react-grid-layout';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

function generateLayout(num_items: number) {
  // const p = this.props;
  return _.map(new Array(num_items), function (item: any, i: number) {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (i * 2) % 12,
      // Go to the next y value every 6 items added to the layout
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
    };
  });
}

const itemDetails = [
  {
    date: '2020-12',
    priority: 3,
    title: 'a',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'b',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-12',
    priority: 1,
    title: 'c',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
  {
    date: '2020-11',
    priority: 1,
    title: 'd',
    image: {
      url: 'fake_url',
    },
    details: 'details about the item.',
    component: null,
  },
];

function isInt(value: any): boolean {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

function generateTimelineLayout(itemDetails: any[]) {
  return _.reduce(
    itemDetails,
    function (result: any[], item: { [key: string]: any }) {
      const createNextResultFn = (result: any[]): any[] => {
        // Create a timeline date seperator or just return the result.
        const [layout, date, maxY, totalItems] = result;
        if (date !== item.date) {
          // Create the timeline date seperator.
          const timelineSeperator = {
            i: item.date,
            x: 0,
            w: 12,
            y: maxY,
            h: 1,
          };
          // NOTE: Functional would make a copy of the array with the newly added element.
          layout.push(timelineSeperator);
          return [layout, item.date, maxY, totalItems];
        }
        return result;
      };

      const [layout, date, maxY, totalItems] = createNextResultFn(result);
      const prevItem = layout[layout.length - 1];
      const prevX = prevItem.x;
      const prevY = prevItem.y;
      const prevW = prevItem.w;
      const isPrevItemATimelineSeperator = !isInt(prevItem.i);

      // TODO: Change width and height based on item priority?
      const nextW = 2;
      const nextH = 4;
      const createNextXAndYFn = (
        prevX,
        prevY,
        prevW,
        isPrevItemATimelineSeperator,
      ) => {
        if (isPrevItemATimelineSeperator) {
          const nextX = 0;
          const nextY = maxY + 1;
          return [nextX, nextY];
        } else {
          const nextX = prevX + prevW;
          const nextY = prevY;

          if (nextX + nextW > 12) {
            // Next item should be put onto the next row
            return [0, maxY];
          }
          return [nextX, nextY];
        }
      };
      const [nextX, nextY] = createNextXAndYFn(
        prevX,
        prevY,
        prevW,
        isPrevItemATimelineSeperator,
      );

      const newMaxY = Math.max(maxY, nextY + nextH);
      const nextItem = {
        i: totalItems.toString(),
        x: nextX,
        w: nextW,
        y: nextY,
        h: nextH,
      };
      layout.push(nextItem);
      // create a normal layout item underneath the date layout seperator item
      return [layout, item.date, newMaxY, totalItems + 1];
    },
    [[], null, 0, 0],
  );
}

// function generateDOM(num_items: number) {
//   return _.map(_.range(num_items), function (i) {
//     return (
//       <div key={i}>
//         <span className="text">{i}</span>
//       </div>
//     );
//   });
// }

function generateDOM(layout) {
  return _.map(layout, function (item) {
    // console.log(item)
    return (
      <div key={item.i}>
        <span className="text">{item.i}</span>
      </div>
    );
  });
}

export function HomePage() {
  // var d = new Date("2020-12");
  // document.getElementById("demo").innerHTML = d.toUTCString();
  // const layout = [
  //   { i: 'a', x: 0, w: 12, y: 0, h: 1 },
  //   { i: 'b', x: 0, w: 2, y: 1, h: 4 },
  //   { i: 'c', x: 2, w: 1, y: 1, h: 1 },
  //   { i: 'd', x: 3, w: 1, y: 1, h: 1 },
  //   { i: 'e', x: 0, w: 12, y: 6, h: 1 },
  //   { i: 'f', x: 0, w: 2, y: 7, h: 4 },
  //   { i: 'g', x: 2, w: 2, y: 7, h: 4 },
  // ];
  // const layout = [
  //   { i: 'a', x: 0, w: 12, y: 0, h: 1 },
  //   { i: 'b', x: 0, w: 5, y: 1, h: 4 },
  //   { i: 'c', x: 5, w: 5, y: 1, h: 4 },
  //   { i: 'd', x: 0, w: 5, y: 5, h: 4 },
  //   { i: 'e', x: 0, w: 12, y: 9, h: 1 },
  //   { i: 'f', x: 0, w: 5, y: 10, h: 4 },
  // ];

  const [layout, ...rest] = generateTimelineLayout(itemDetails);
  // const num_items = 7;
  // const layout = generateLayout(num_items);
  console.log(layout);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>Creativity meets persistence</span>
      {/* <Container>
      <Row> */}
      {/* <div style={{height: 100}}> */}
      <ReactGridLayout
        layout={layout}
        isBounded={true}
        className="layout"
        // items={20}
        rowHeight={30}
        cols={12}
        compactType={'vertical'}
      >
        {/* <div key="a">a</div>
        <div key="b">
          <Card
            style={{
              width: '100%',
              height: '100%',
              //  Scroll bar only when needed
              overflow: 'auto',
            }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div key="c">c</div>
        <div key="d">d</div>
        <div key="e">e</div>
        <div key="f">f</div> */}
        {/* <div key="g">g</div> */}
        {/* {generateDOM(num_items)} */}
        {generateDOM(layout)}
      </ReactGridLayout>
    </>
  );
}
