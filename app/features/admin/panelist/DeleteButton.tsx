"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Delete from "./svg/delete";
import { Button } from "flowbite-react";
import { useDeletePanelistMutation } from "@/lib/api/panelistApi";
import { useSnackbar } from "@/lib/context/SnackbarContext";

export default function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [deletePanelist, responseDeletePanelist] = useDeletePanelistMutation();
  const { showSnackbar } = useSnackbar();
  async function handleDelete(id: string) {
    try {
      await deletePanelist(id).unwrap();
      showSnackbar("Panelist has been successfully deleted.");
      setOpen(false);
    } catch (error) {
      showSnackbar("Error", "error");
    }
  }
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <Delete />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mx-auto w-67 text-center">
          <div className="mx-auto my-4 w-48">
            <h3 className="font-black/20 text-lg text-gray-800">
              Confirm deletion
            </h3>
            <p className="mt-2 font-medium text-gray-500">
              Are you sure you want to delete this panelist ?
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-5">
            <Button
              size="sm"
              className=" bg-danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
            <Button
              size="sm"
              className=" bg-warning"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
