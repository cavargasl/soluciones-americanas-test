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
      <Table className="border max-w-5xl m-auto">
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
            isLoading ? <TableRow><TableCell>Loading...</TableCell></TableRow> :
              isError ? <TableRow><TableCell>Error</TableCell></TableRow> :
                data?.data.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img src={item.avatar} alt={`Image of ${item.first_name}`} className="w-20 h-20 object-cover" />
                    </TableCell>
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
