"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components3/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components3/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components3/ui/table"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { useCallback, useMemo, useState } from "react"

const initialColumns = [
  "username",
  "bookmarks",
  "folders",
  "tags",
  "joined",
  "actions",
]

const usersData = [
  {
    username: "johndoe",
    bookmarks: 25,
    folders: 10,
    tags: 50,
    joined: "2021-03-15",
  },
  {
    username: "janesmith",
    bookmarks: 18,
    folders: 7,
    tags: 32,
    joined: "2022-01-01",
  },
  {
    username: "bobwilson",
    bookmarks: 32,
    folders: 15,
    tags: 60,
    joined: "2020-09-01",
  },
  {
    username: "sarahjones",
    bookmarks: 14,
    folders: 5,
    tags: 22,
    joined: "2023-02-28",
  },
  {
    username: "mikeanderson",
    bookmarks: 28,
    folders: 12,
    tags: 45,
    joined: "2021-11-10",
  },
]

function WithVisibility() {
  const [selectedColumns, setSelectedColumns] = useState(initialColumns)

  const handleColumnToggle = useCallback((column: string) => {
    setSelectedColumns((prevColumns) =>
      prevColumns.includes(column)
        ? prevColumns.filter((col) => col !== column)
        : [...prevColumns, column],
    )
  }, [])

  const columns = useMemo(
    () => ["username", "bookmarks", "folders", "tags", "joined", "actions"],
    [],
  )

  return (
    <Card className="mx-auto my-6 w-full max-w-6xl">
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-2">
          <CardTitle>User Profile Data</CardTitle>
          <CardDescription>
            View and manage user profile data, including bookmarks, folders, and
            tags.
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Eye className="size-3.5 text-muted-foreground" />
              <span className="ml-2">Show/Hide</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {columns.map((column) => (
              <DropdownMenuCheckboxItem
                key={column}
                checked={selectedColumns.includes(column)}
                onCheckedChange={() => handleColumnToggle(column)}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {selectedColumns.map((column) => (
                <TableHead key={column}>
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData.map((user, index) => (
              <TableRow key={index}>
                {selectedColumns.map((column) => (
                  <TableCell key={column}>
                    {column === "username" ? (
                      <a href="#" className="font-medium">
                        {user.username}
                      </a>
                    ) : column === "bookmarks" ? (
                      user.bookmarks
                    ) : column === "folders" ? (
                      user.folders
                    ) : column === "tags" ? (
                      user.tags
                    ) : column === "joined" ? (
                      user.joined
                    ) : column === "actions" ? (
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <Pencil className="size-3.5" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export { WithVisibility }
