const createMockId = () =>
  Date.now().toString(36) +
  Math.random().toString(36).substr(2, 5).toLowerCase();

export default [
  {
    date: "Today",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: null
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: null
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: null
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: null
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: null
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: null
      }
    ]
  },
  {
    date: "Sat 31 Oct",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: 6.95
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: 12.95
      }
    ]
  },
  {
    date: "Sun 1 Nov",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: 6.95
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: null
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: null
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: null
      }
    ]
  },
  {
    date: "Mon 2 Nov",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: 6.95
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: null
      }
    ]
  },
  {
    date: "Tue 3 Nov",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: 6.95
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: null
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: 12.95
      }
    ]
  },
  {
    date: "Wed 4 Nov",
    slots: [
      {
        id: createMockId(),
        time: "7am to 6pm",
        price: 6.95
      },
      {
        id: createMockId(),
        time: "7am to 11pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "10am to 2pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "12pm to 4pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "2pm to 6pm",
        price: 12.95
      },
      {
        id: createMockId(),
        time: "5pm to 9pm",
        price: null
      }
    ]
  }
];
