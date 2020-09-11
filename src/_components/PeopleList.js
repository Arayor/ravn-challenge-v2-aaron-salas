import React from 'react'
import LoadingCell from "./LoadingCell";
import NoticeCell from './NoticeCell'
import PersonCell from "./PersonCell";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from 'react-virtualized-auto-sizer';
import UsePeople from "../_components/usePeople"

export default function PeopleList(props) {

    const { people, loading, loadMore, hasNextPage, error } = UsePeople();
    const personsCount = hasNextPage ? people?.length + 1 : people?.length;
    const loadMorePersons = loading ? () => { } : loadMore;
    const isPersonLoaded = index => !hasNextPage || index < people.length;
    if (error) {
        return <NoticeCell message="Failed to Load Data." />
    }
    else
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <InfiniteLoader
                        isItemLoaded={isPersonLoaded}
                        itemCount={personsCount}
                        minimumBatchSize={5}
                        loadMoreItems={loadMorePersons}>
                        {({ onItemsRendered, ref }) =>
                            <List
                                height={height - 50}
                                itemCount={personsCount}
                                itemSize={92}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                width={width}>
                                {({ index, style }) => {
                                    let name = people[index]?.name;
                                    let specie = people[index]?.species?.name || 'unknown';
                                    let homeworld = people[index]?.homeworld?.name || 'unknown'
                                    return (
                                        <div key={index} className="InfiniteList-item" style={style}>

                                            {isPersonLoaded(index) ?
                                                <PersonCell
                                                    name={name}
                                                    detail={specie + ' from ' + homeworld}
                                                    onClick={() => {
                                                        props.setSelected(people[index])
                                                        props.drawerToggle()
                                                    }}>
                                                </PersonCell>
                                                :
                                                <LoadingCell />
                                            }
                                        </div>
                                    );
                                }}
                            </List>
                        }
                    </InfiniteLoader>)
                }
            </AutoSizer >
        );

}
