import React, { useState, useEffect } from 'react';

export default function TestHoc(HocSon) {
    // 返回一个新的函数组件,复用监听逻辑
    return function WrappedComponent() {
        // 获取鼠标的位置
        const [x, setX] = useState(0);
        const [y, setY] = useState(0);

        useEffect(() => {
            const handleMouseMove = (e) => {
                setX(e.clientX);
                setY(e.clientY);
            };

            document.addEventListener('mousemove', handleMouseMove);
            
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);

        // 给子组件传递数据
        return (
            <>
                <div>TestHoc</div>
                <HocSon x={x} y={y} />
            </>
        );
    };
}

