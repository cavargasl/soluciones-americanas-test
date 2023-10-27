import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { useQuery } from "@tanstack/react-query";
import { getListUsers } from "./services";

export default function ListUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'], queryFn: getListUsers,
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Avatar</TableHead>
            <TableHead>Firs Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            isLoading ? <TableRow>Loading...</TableRow> :
              isError ? <TableRow>Error</TableRow> :
                data?.data.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.avatar}</TableCell>
                    <TableCell>{item.first_name}</TableCell>
                    <TableCell>{item.last_name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                  </TableRow>
                ))
          }
        </TableBody>
      </Table>
    </>
  )
}
