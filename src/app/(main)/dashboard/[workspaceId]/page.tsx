// export const dynamic = 'force-dynamic';s

// import QuillEditor from '@/components/quill-editor/quill-editor';
import { getWorkspaceDetails } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import React from 'react';

const Workspace =  () => {
  // const { data, error } = await getWorkspaceDetails(params.workspaceId);
  // if (error || !data.length) redirect('/dashboard');
  return (
    // <div className="relative">
    //   <QuillEditor
    //     dirType="workspace"
    //     fileId={params.workspaceId}
    //     dirDetails={data[0] || {}}
    //   />
    // </div>
    <div>WorkspaceIdPage</div>
  );
};

export default Workspace;