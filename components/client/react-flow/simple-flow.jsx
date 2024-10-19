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
} from "../../utils/simpleFlowNodes"

const SimpleFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesSimple)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdgesSimple)
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
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                // onConnect={onConnect}
                // selectionMode={SelectionMode.Partial}
                // selectionOnDrag
                // panOnDrag={panOnDrag}
                fitView
            >
                <Controls />
                <Background variant="dots" gap={[12, 12]} size={1} />
                <NodeToolbar />
            </ReactFlow>
        </div>
    )
}

export default SimpleFlow
