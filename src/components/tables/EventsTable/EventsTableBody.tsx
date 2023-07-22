"use client";

import Image from "next/image";

import { IconButton } from "@/components/ui/buttons/IconButton";

import * as Popover from "@radix-ui/react-popover";
import { MoreHorizontal, Pencil, Trash2, Calendar, MapPin } from "lucide-react";

import { Badge } from "../../ui/Badge";
import { Divider } from "../../ui/Divider";
import { OptionsPopover } from "./components/OptionsPopover";

export function EventsTableBody() {
  const tdStyle = "whitespace-nowrap px-6 py-3 border-b border-layout-body";

  return (
    <tbody>
      <tr>
        <td className={tdStyle}>
          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50"
              alt=""
              width={500}
              height={500}
              className="h-20 w-[106px] rounded-xl"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-base font-bold">Nome do evento</h3>
              <div className="flex gap-6">
                <div className="flex gap-1 text-xs text-content-base/60">
                  <Calendar className="h-4 w-4 text-primary-pure" />
                  XX-XX Mês XXXX
                </div>

                <div className="flex gap-1 text-xs text-content-base/60">
                  <MapPin className="h-4 w-4 text-primary-pure" />
                  Cidade/UF
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className={tdStyle}>
          <Badge />
        </td>
        <td className={tdStyle}>
          <Popover.Root>
            <Popover.Trigger asChild aria-controls="options">
              <IconButton icon={MoreHorizontal} />
            </Popover.Trigger>

            <OptionsPopover.Root>
              <OptionsPopover.Actions icon={Pencil} label="Editar" />
              <Divider />
              <OptionsPopover.Actions
                icon={Trash2}
                label="Excluir"
                type="delete"
              />
            </OptionsPopover.Root>
          </Popover.Root>
        </td>
      </tr>

      <tr>
        <td className={tdStyle}>
          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50"
              alt=""
              width={500}
              height={500}
              className="h-20 w-[106px] rounded-xl"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-base font-bold">Nome do evento</h3>
              <div className="flex gap-6">
                <div className="flex gap-1 text-xs text-content-base/60">
                  <Calendar className="h-4 w-4 text-primary-pure" />
                  XX-XX Mês XXXX
                </div>

                <div className="flex gap-1 text-xs text-content-base/60">
                  <MapPin className="h-4 w-4 text-primary-pure" />
                  Cidade/UF
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className={tdStyle}>
          <Badge type="private" />
        </td>
        <td className={tdStyle}>
          <Popover.Root>
            <Popover.Trigger asChild aria-controls="options">
              <IconButton icon={MoreHorizontal} />
            </Popover.Trigger>

            <OptionsPopover.Root>
              <OptionsPopover.Actions icon={Pencil} label="Editar" />
              <Divider />
              <OptionsPopover.Actions
                icon={Trash2}
                label="Excluir"
                type="delete"
              />
            </OptionsPopover.Root>
          </Popover.Root>
        </td>
      </tr>
    </tbody>
  );
}
