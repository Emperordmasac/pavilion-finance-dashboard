"use client"

import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Payment, columns } from "@/features/accounts/components/columns"
import { useNewAccount } from "@/features/accounts/hooks/use-new-account"

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com"
  },
  {
    id: "728ed52d",
    amount: 200,
    status: "success",
    email: "s@example.com"
  }
]

export default function AccountPage() {
  const newAccount = useNewAccount()
  return (
    <div className=" max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className=" border-none drop-shadow-sm">
        <CardHeader className=" gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className=" text-xl line-clamp-1">
            Acccounts page
          </CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className=" size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable filterKey="email" columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
}
