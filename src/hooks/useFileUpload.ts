import { useState, useCallback } from 'react'
import { uploadService } from '../services/upload/uploadService'
import { UploadResult, UploadProgress, UploadError } from '../services/upload/types'

interface UseFileUploadResult {
  isUploading: boolean
  progress: UploadProgress | null
  error: UploadError | null
  uploadFile: (file: File) => Promise<UploadResult>
  reset: () => void
}

export function useFileUpload(): UseFileUploadResult {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState<UploadProgress | null>(null)
  const [error, setError] = useState<UploadError | null>(null)

  const reset = useCallback(() => {
    setIsUploading(false)
    setProgress(null)
    setError(null)
  }, [])

  const uploadFile = useCallback(async (file: File): Promise<UploadResult> => {
    try {
      setIsUploading(true)
      setError(null)
      
      return await uploadService.uploadCompanyLogo(file, (progress) => {
        setProgress(progress)
      })
    } catch (err) {
      const error = err as UploadError
      setError(error)
      throw error
    } finally {
      setIsUploading(false)
    }
  }, [])

  return { isUploading, progress, error, uploadFile, reset }
}