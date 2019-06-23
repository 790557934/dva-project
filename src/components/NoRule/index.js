import React from 'react'

export default function NoRule(props) {
    const { status, desc } = props;
    return (
        <div>
            {status + ':' + desc}
        </div>
    )
}
