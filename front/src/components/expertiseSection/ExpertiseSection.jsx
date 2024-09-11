import React from 'react'

const ExpertiseSection = () => {
    return (
        <>
        
        
        <div className="flex justify-around flex-wrap">
            <div className="expertise-item bg-pink-100 p-6 rounded-lg shadow-md text-center w-64 m-4">
                <h3 className="font-bold text-xl">Bureau d'étude en électricité CFO / CFA et Télécom</h3>
            </div>
            <div className="expertise-item bg-green-100 p-6 rounded-lg shadow-md text-center w-64 m-4">
                <h3 className="font-bold text-xl">Synthèse et modélisation BIM</h3>
            </div>
            <div className="expertise-item bg-purple-100 p-6 rounded-lg shadow-md text-center w-64 m-4">
                <h3 className="font-bold text-xl">Pilotage des chantiers OPC</h3>
            </div>
        </div>
        </>

    )
}

export default ExpertiseSection