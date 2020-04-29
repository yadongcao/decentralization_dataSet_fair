import React, { Component } from 'react';
import { useTable, usePagination } from 'react-table'
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
  .pagination {
    padding: 0.5rem;
  }
`

function Table({ columns, data,typez }) {
  console.log("type",typez,columns)
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )
  
  // Render the UI for your table
  return (
    <>
      <MaUTable {...getTableProps()} >
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}><b>{column.render('Header')}</b></TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell,ii) => {
                  console.log("cell",cell);
                  if (ii==0){
                    if (typez=="dataset"){
                      return <TableCell {...cell.getCellProps()}><a href={"/download?fileUrl="+cell.value} target="_blank" style={{width:100,height:100}}><FontAwesomeIcon icon={faDownload} style={{width:100}}   style={{cursor:"pointer"}} color="#0f0f0f"/></a></TableCell>
                    }else{
                      return <TableCell {...cell.getCellProps()}><img src={cell.value} style={{width:100}}/></TableCell>
                    }
                  }else if (ii==6){
                    return <TableCell {...cell.getCellProps()}><a href={cell.value} style={{color:"blue"}}>取消</a></TableCell>
                  }else{
                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  }     
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default class MyTable extends Component {

  render() {

    const{columns,data,typez} = this.props;
    return (
      <Styles>
      <div>
        <CssBaseline />
        <Table columns={columns} data={data} typez={typez} className="-striped -highlight" />
      </div>
      </Styles>
    )
  }

}