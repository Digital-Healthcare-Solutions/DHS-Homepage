export const initialNodesSimple = [
    {
        id: "1",
        position: {
            x: 0,
            y: 0
        },
        data: {
            label: "Call Comes in"
        },
        width: 150,
        height: 40
    },
    {
        id: "2",
        position: {
            x: 0,
            y: 67.20016240219095
        },
        data: {
            label: "Is Caller in my contacts?"
        },
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
            x: 0,
            y: 67.20016240219095
        },
        dragging: false
    },
    {
        id: "3a",
        position: {
            x: -280.0170368666553,
            y: 144.99389698561254
        },
        data: {
            label: "Yes"
        },
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
            x: -280.0170368666553,
            y: 144.99389698561254
        },
        dragging: false
    },
    {
        id: "3b",
        position: {
            x: 283.5216081220545,
            y: 147.05805951262323
        },
        data: {
            label: "No"
        },
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
            x: 283.5216081220545,
            y: 147.05805951262323
        },
        dragging: false
    },
    {
        id: "4a",
        position: {
            x: -280.2796735910456,
            y: 245.98799415060375
        },
        data: {
            label: "Patient Leaves Voicemail"
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: -280.2796735910456,
            y: 245.98799415060375
        },
        dragging: false
    },
    {
        id: "4b",
        position: {
            x: 283.3937317130391,
            y: 214.61933898904624
        },
        data: {
            label: "Digit Gathering Enabled (location or doctor)"
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: 283.3937317130391,
            y: 214.61933898904624
        },
        dragging: false
    },
    {
        id: "5a",
        position: {
            x: -280.535426409076,
            y: 355.8079059234255
        },
        data: {
            label: "Voicemail transcribed into text"
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: -280.535426409076,
            y: 355.8079059234255
        },
        dragging: false
    },
    {
        id: "5b",
        position: {
            x: 419.7736451390571,
            y: 305.41426732421735
        },
        data: {
            label: "No"
        },
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
            x: 419.7736451390571,
            y: 305.41426732421735
        },
        dragging: false
    },
    {
        id: "5c",
        position: {
            x: 154.62652650158208,
            y: 303.8101841733231
        },
        data: {
            label: "Yes"
        },
        width: 150,
        height: 40,
        selected: false,
        positionAbsolute: {
            x: 154.62652650158208,
            y: 303.8101841733231
        },
        dragging: false
    },
    {
        id: "6a",
        position: {
            x: -280.7911792271066,
            y: 484.3765659473238
        },
        data: {
            label: "User texts/calls back patient"
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: -280.7911792271066,
            y: 484.3765659473238
        },
        dragging: false
    },
    {
        id: "6b",
        position: {
            x: 154.50085516423155,
            y: 369.2446187863838
        },
        data: {
            label: "Ask patient to input digit based on setting (ie. location or doctor)"
        },
        width: 150,
        height: 76,
        selected: false,
        positionAbsolute: {
            x: 154.50085516423155,
            y: 369.2446187863838
        },
        dragging: false
    },
    {
        id: "7a",
        position: {
            x: 155.46555627004955,
            y: 467.11020836346984
        },
        data: {
            label: "Add digit input to contact record "
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: 155.46555627004955,
            y: 467.11020836346984
        },
        dragging: false
    },
    {
        id: "8a",
        position: {
            x: 295.02909406077174,
            y: 576.0741947051537
        },
        data: {
            label: "Proceed to leaving voicemail"
        },
        width: 150,
        height: 58,
        selected: false,
        positionAbsolute: {
            x: 295.02909406077174,
            y: 576.0741947051537
        },
        dragging: false
    },
    {
        id: "final",
        position: {
            x: -32.74120797569793,
            y: 656.0756978978885
        },
        data: {
            label: "Resolved"
        },
        width: 150,
        height: 40,
        selected: true,
        positionAbsolute: {
            x: -32.74120797569793,
            y: 656.0756978978885
        },
        dragging: false
    }
]
export const initialEdgesSimple = [
    {
        id: "e1-2",
        source: "1",
        target: "2"
    },
    {
        id: "e2-3a",
        source: "2",
        target: "3a"
    },
    {
        id: "e2-3b",
        source: "2",
        target: "3b"
    },
    {
        id: "e3a-4a",
        source: "3a",
        target: "4a"
    },
    {
        id: "e4a-5a",
        source: "4a",
        target: "5a"
    },
    {
        id: "e5a-6a",
        source: "5a",
        target: "6a"
    },
    {
        id: "e6a-final",
        source: "6a",
        target: "final"
    },
    {
        source: "5c",
        sourceHandle: null,
        target: "6b",
        targetHandle: null,
        id: "reactflow__edge-5c-6b"
    },
    {
        source: "8a",
        sourceHandle: null,
        target: "6a",
        targetHandle: null,
        id: "reactflow__edge-8a-6a"
    },
    {
        source: "7a",
        sourceHandle: null,
        target: "8a",
        targetHandle: null,
        id: "reactflow__edge-7a-8a"
    },
    {
        source: "6b",
        sourceHandle: null,
        target: "7a",
        targetHandle: null,
        id: "reactflow__edge-6b-7a"
    },
    {
        source: "4b",
        sourceHandle: null,
        target: "5c",
        targetHandle: null,
        id: "reactflow__edge-4b-5c"
    },
    {
        source: "3b",
        sourceHandle: null,
        target: "4b",
        targetHandle: null,
        id: "reactflow__edge-3b-4b"
    },
    {
        source: "4b",
        sourceHandle: null,
        target: "5b",
        targetHandle: null,
        id: "reactflow__edge-4b-5b"
    },
    {
        source: "5b",
        sourceHandle: null,
        target: "8a",
        targetHandle: null,
        id: "reactflow__edge-5b-8a"
    }
]
