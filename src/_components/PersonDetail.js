import React from 'react';
import SectionHeader from './SectionHeader';
import DataCell from './DataCell';

export const PersonDetail = (props) => {
    const { name, eyeColor, hairColor, skinColor, birthYear, vehicleConnection } = props.sel
    if (name)
        return (
            <div>
                <SectionHeader message='General Information' />
                <DataCell title='Name' description={name} />
                <DataCell title='Eye Color' description={eyeColor} />
                <DataCell title='Hair Color' description={hairColor} />
                <DataCell title='Skin Color' description={skinColor} />
                <DataCell title='Birth Year' description={birthYear} />

                {
                    (vehicleConnection?.vehicles.length !== 0) &&
                    <SectionHeader message='Vehicles' />
                }
                {
                    vehicleConnection?.vehicles?.map(v =>
                        <DataCell title={v.name} key={v.id} />
                    )
                }
            </div>
        )
    else return <div />
}
