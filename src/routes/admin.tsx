import { createFileRoute } from '@tanstack/react-router'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { Dashboard } from '@/features/dashboard'

export const Route = createFileRoute('/admin')({
  component: () => (
    <AuthenticatedLayout>
      <Dashboard />
    </AuthenticatedLayout>
  ),
})
