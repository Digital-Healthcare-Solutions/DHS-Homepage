"use client"

import React, { useCallback, useState } from "react"
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    SelectionMode,
    NodeToolbar
} from "reactflow"
import { useTheme } from "next-themes"

import "reactflow/dist/style.css"
import {
    initialEdgesSimple,
    initialNodesSimple
} from "../../../utils/simpleFlowNodes"
import {
    initialEdgesForwarding,
    initialNodesForwarding
} from "../../../utils/forwarCallFlow"

const FlowWithCallForwarding = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(
        initialNodesForwarding
    )
    const [edges, setEdges, onEdgesChange] = useEdgesState(
        initialEdgesForwarding
    )
    const [isOverlayVisible, setIsOverlayVisible] = useState(true) // Overlay visibility state

    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    )

    const panOnDrag = [1, 2]

    // Function to toggle the overlay visibility
    const handleOverlayClick = () => {
        setIsOverlayVisible(false)
    }

    const addNode = () => {
        const newNode = {
            id: (nodes.length + 1).toString(),
            type: "default",
            position: { x: 0, y: 0 },
            data: { label: `New Node ${nodes.length + 1}` }
        }
        setNodes([...nodes, newNode])
        console.log("Node added")
    }

    console.log("Nodes", nodes)
    console.log("Edges", edges)

    return (
        <div className="h-[80vh] w-[80vw] border border-neutral-500 dark:border-neutral-700 rounded-md relative">
            {isOverlayVisible && (
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
                    onClick={handleOverlayClick}
                >
                    <p className="text-white text-lg cursor-pointer">
                        Click to enable
                    </p>
                </div>
            )}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                selectionMode={SelectionMode.Partial}
                selectionOnDrag
                panOnDrag={panOnDrag}
                fitView
            >
                <Controls />
                {/* @ts-ignore */}
                <Background variant="dots" gap={[12, 12]} size={1} />
                <NodeToolbar />
                {/* <MiniMap
                    nodeColor={(n) => {
                        if (n.type === "input") return "blue"
                        if (n.type === "output") return "red"
                        if (n.type === "default") return "green"
                        return "yellow"
                    }}
                /> */}
            </ReactFlow>{" "}
            <button
                className=" bg-primary-500 text-white p-2 rounded-md"
                onClick={addNode}
            >
                Add Node
            </button>
        </div>
    )
}

export default FlowWithCallForwarding
